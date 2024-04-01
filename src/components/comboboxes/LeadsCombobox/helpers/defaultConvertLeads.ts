export const defaultConvertLeads = (leads: LeadResponse[]) =>
  leads.map((lead) => ({
    label: lead.fullname,
    value: lead.id
  }));
