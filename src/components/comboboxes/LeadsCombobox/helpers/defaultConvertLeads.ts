export const defaultConvertLeads = (leads: $TSFIXME[]) =>
  leads.map((lead) => ({
    label: lead.fullname,
    value: lead.id
  }));
