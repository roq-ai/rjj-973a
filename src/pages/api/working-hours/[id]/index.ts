import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { workingHoursValidationSchema } from 'validationSchema/working-hours';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.working_hours
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getWorkingHoursById();
    case 'PUT':
      return updateWorkingHoursById();
    case 'DELETE':
      return deleteWorkingHoursById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getWorkingHoursById() {
    const data = await prisma.working_hours.findFirst(convertQueryToPrismaUtil(req.query, 'working_hours'));
    return res.status(200).json(data);
  }

  async function updateWorkingHoursById() {
    await workingHoursValidationSchema.validate(req.body);
    const data = await prisma.working_hours.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteWorkingHoursById() {
    const data = await prisma.working_hours.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
