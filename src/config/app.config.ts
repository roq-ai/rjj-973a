interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Employee', 'Team Lead'],
  tenantName: 'Organization',
  applicationName: 'RJj',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
