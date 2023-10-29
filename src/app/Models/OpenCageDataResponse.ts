export interface OpenCageDataResponse {
  results:[{components:components,formatted:string}];
}
interface components{
    'ISO_3166-1_alpha-2': string;
    'ISO_3166-1_alpha-3': string;
    _category: string;
    _type: string;
    city: string;
    continent: string;
    country: string;
    country_code: string;
    postcode: string;
    state: string;
    state_code: string;
    road?: string;
  };