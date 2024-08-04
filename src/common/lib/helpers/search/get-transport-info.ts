export const getTransportInfo = (segment: { carrier_name: string }) => {
  const carrierName = segment.carrier_name || "";
  return `${carrierName}`;
};
