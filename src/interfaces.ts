
//TODO: Update this interface with shipping status when that data becomes available
interface ISearchResult {
  id: number;
  label_id: string;
  shipping_tracking_code: string;
}

export type {ISearchResult};
