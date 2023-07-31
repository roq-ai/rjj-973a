const mapping: Record<string, string> = {
  organizations: 'organization',
  'performance-evaluations': 'performance_evaluation',
  users: 'user',
  'working-hours': 'working_hours',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
