export const GREEN_CHOSE__PATH = (user: string, type: string, sort: string) =>
  `/stats?stats_type=co2_saved&target_type=${type}&target_id=${user}&date_type=${sort}`;

export const TRIP_AMOUNTS__PATH = (user: string, type: string, sort: string) =>
  `/stats?stats_type=how_you_travel&target_type=${type}&target_id=${user}&date_type=${sort}`;

export const CO_CHART__PATH = (user: string, type: string) =>
  `/stats?stats_type=co2_total&target_type=${type}&target_id=${user}&date_type=year_to_date`;
