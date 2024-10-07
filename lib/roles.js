export const roles = {
    superAdmin: {
      canApprove: true,
      canRegister: true,
      canViewReports: true,
    },
    sideAdmin: {
      canApprove: false,
      canRegister: true,
      canViewReports: false,
    },
    kecamatanAdmin: {
      canApprove: false,
      canRegister: true,
      canViewReports: true,
    },
  };
  
  export const checkPermission = (role, permission) => {
    return roles[role]?.[permission];
  };
  