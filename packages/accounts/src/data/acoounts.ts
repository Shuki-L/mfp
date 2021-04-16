const vendors = {
  YALIN_LAPIDOT: "YALIN_LAPIDOT",
  HAREL: "HAREL",
  MENORA: "MENORA",
  PSAGOT: "PSAGOT",
  KEREN_HISHTALMUT_OVDEY_MEDINA: "KEREN_HISHTALMUT_OVDEY_MEDINA",
};

const types = {
  KUPAT_GEMEL: "KUPAT_GEMEL",
  KEREN_HISHTALMUT: "KEREN_HISHTALMUT",
  PENSIA: "PENSIA",
  LIFE_INSURANCE: "LIFE_INSURANCE",
  PERSONAL_INCIDENT_INSURANCE: "PERSONAL_INCIDENT_INSURANCE",
  SIUDY_INSURANCE: "SIUDY_INSURANCE",
};

enum AccountType {
  KUPAT_GEMEL = "KUPAT_GEMEL",
  KEREN_HISHTALMUT = "KEREN_HISHTALMUT",
  PENSIA = "PENSIA",
}

interface KupatGemel {
  kind: AccountType.KUPAT_GEMEL;
  radius: number;
}

interface Square {
  kind: AccountType.KEREN_HISHTALMUT;
  sideLength: number;
}

enum EVENTS_TYPE {
  CREATED = "CREATED",
  UPDATED = "UPDATED",
  RESTORED = "RESTORED",
  DELETED = "DELETED",
  DEPOSIT = "DEPOSIT",
  WITHDRAW = "WITHDRAW",
}

// site_id(string), version(int), created_at (timestamp), payload (blob)

interface Time {
  year: number;
  month: number;
  day: number;
}

interface Payload {
  name: string;
  vendor: string;
  type: string;
}

interface PayloadSavingsPlan extends Payload {
  interest: number;
}

interface PayloadPensya extends Payload {
  actor: string;
  amount: number;
}

interface PayloadDeposit {
  actor: string;
  amount: number;
}

interface Event {
  accountId: number;
  eventType: EVENTS_TYPE;
  time: Time;
  payload:
    | Payload[]
    | PayloadSavingsPlan[]
    | PayloadDeposit[]
    | PayloadPensya[];
}

const events: Event[] = [
  {
    accountId: 111,
    eventType: EVENTS_TYPE.CREATED,
    time: {
      year: 2014,
      month: 11,
      day: 12,
    },
    payload: [
      {
        name: "פיקדון שמש",
        vendor: "בנק ירושלים",
        type: "חיסכון",
        interest: 3,
        // periods: [],
      },
    ],
  },
  {
    accountId: 111,
    eventType: EVENTS_TYPE.DEPOSIT,
    time: {
      year: 2014,
      month: 11,
      day: 13,
    },
    payload: [
      {
        actor: "me",
        amount: 50000,
      },
    ],
  },
  {
    accountId: 22222,
    eventType: EVENTS_TYPE.DEPOSIT,
    time: {
      year: 2021,
      month: 3,
      day: 0,
    },
    // depositTime: {
    //   year: 2021,
    //   month: 3,
    //   day: 0,
    // },
    // payrollTime: {
    //   year: 2021,
    //   month: 2,
    //   day: 0,
    // },
    payload: [
      {
        actor: "employee",
        amount: 1234,
      },
      {
        actor: "employer",
        amount: 1378,
      },
      {
        actor: "בompensation",
        amount: 1714,
      },
    ],
  },
];

const account = {
  id: 1111111,
  type: AccountType.PENSIA,
  name: "הראל פנסיה",
  accumulation: "1,011,500",
  InvestmentלChannel: "מסלול גילעד כללי",
  status: "פעיל רגיל",
  currency: "Shekels",
};

export const accounts = [
  {
    id: "0",
    vendor: vendors.YALIN_LAPIDOT,
    type: types.KUPAT_GEMEL,
    details: [
      {
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
    id: "1",
    vendor: vendors.YALIN_LAPIDOT,
    type: types.KEREN_HISHTALMUT,
    details: [
      {
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
    id: "2",
    vendor: vendors.HAREL,
    type: types.PENSIA,
    details: [
      {
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
    id: "3",
    vendor: vendors.HAREL,
    type: types.LIFE_INSURANCE,
  },
  {
    id: "4",
    vendor: vendors.HAREL,
    type: types.PERSONAL_INCIDENT_INSURANCE,
  },
  {
    id: "4",
    vendor: vendors.HAREL,
    type: types.SIUDY_INSURANCE,
  },
  {
    id: "5674744",
    vendor: vendors.KEREN_HISHTALMUT_OVDEY_MEDINA,
    type: types.KEREN_HISHTALMUT,
    details: [
      {
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
        date: "31.12.2017",
        period: "2017",
      },
    ],
  },
];
