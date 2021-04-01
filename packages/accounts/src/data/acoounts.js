const vendors = {
  YALIN_LAPIDOT: "YALIN_LAPIDOT",
  HAREL: "HAREL",
  MENORA: "MENORA",
  PSAGOT: "PSAGOT",
  KEREN_HISHTALMUT_OVDEY_MEDINA: "KEREN_HISHTALMUT_OVDEY_MEDINA"
};

const types = {
  KUPAT_GEMEL: "KUPAT_GEMEL",
  KEREN_HISHTALMUT: "KEREN_HISHTALMUT",
  PENSIA: "PENSIA",
  LIFE_INSURANCE: "LIFE_INSURANCE",
  PERSONAL_INCIDENT_INSURANCE: "PERSONAL_INCIDENT_INSURANCE",
  SIUDY_INSURANCE: "SIUDY_INSURANCE",
};

export const accounts = [
  {
    accountId: "0",
    vendor: vendors.YALIN_LAPIDOT,
    type: types.KUPAT_GEMEL,
    details: [
      {
        type: "",
        key: "Status",
        value: "Active",
      },
      {
        key: "Deposits",
        value: "true",
      },
      {
        key: "Deposites by",
        value: "Cisco",
      },
      {
        key: "Value date",
        value: "03/2019",
      },
      {
        key: "Value",
        value: "~90k",
      },
    ],
  },
  {
    accountId: "1",
    vendor: vendors.YALIN_LAPIDOT,
    type: types.KEREN_HISHTALMUT,
    details: [
      {
        type: "",
        key: "Status",
        value: "Active",
      },
      {
        key: "Deposits",
        value: "false",
      },
      {
        key: "Value",
        value: "~23k",
      },
      {
        key: "liquid",
        value: "true",
      },
      {
        key: "liquid from",
        value: "2020",
      },
    ],
  },
  {
    accountId: "2",
    vendor: vendors.HAREL,
    type: types.PENSIA,
    details: [
      {
        type: "",
        key: "Status",
        value: "Active",
      },
      {
        key: "Deposits",
        value: "true",
      },
      {
        key: "Deposites by",
        value: "Cisco",
      },
      {
        key: "Value date",
        value: "31/06/2019",
      },
      {
        key: "Value",
        value: "~827k",
      },
    ],
  },
  {
    accountId: "3",
    vendor: vendors.HAREL,
    type: types.LIFE_INSURANCE,
  },
  {
    accountId: "4",
    vendor: vendors.HAREL,
    type: types.PERSONAL_INCIDENT_INSURANCE,
  },
  {
    accountId: "4",
    vendor: vendors.HAREL,
    type: types.SIUDY_INSURANCE,
  },
  {
    accountId: "5674744",
    vendor: vendors.KEREN_HISHTALMUT_OVDEY_MEDINA,
    type: types.KEREN_HISHTALMUT,
    details: [
      {
        type: "",
        key: "Status",
        value: "Active",
      },
      {
        key: "Deposits",
        value: "false",
      },
      {
        key: "Deposites by",
        value: "Bezeq",
      },
      {
        key: "Value",
        value: 1919,
      },
      {
        key: "Insurance Value",
        value: 1919,
      },
      {
        key: "liquid",
        value: "true",
      },
      {
        key: "liquid from",
        value: "28/11/2013",
      },
    ],
    status: [
      {
        date: '31.12.2017',
        period: '2017'
      }
    ]
  },
];
