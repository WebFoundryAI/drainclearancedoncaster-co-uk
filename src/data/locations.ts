export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "doncaster",
  name: "Doncaster",
  countyOrRegion: "South Yorkshire",
  latitude: 53.5228,
  longitude: -1.1309,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "rotherham",
    name: "Rotherham",
    countyOrRegion: "South Yorkshire",
    latitude: 53.4326,
    longitude: -1.3568,
  },
  {
    slug: "barnsley",
    name: "Barnsley",
    countyOrRegion: "South Yorkshire",
    latitude: 53.5526,
    longitude: -1.4793,
  },
  {
    slug: "scunthorpe",
    name: "Scunthorpe",
    countyOrRegion: "North Lincolnshire",
    latitude: 53.5809,
    longitude: -0.6502,
  },
  {
    slug: "thorne",
    name: "Thorne",
    countyOrRegion: "South Yorkshire",
    latitude: 53.6121,
    longitude: -0.9629,
  },
  {
    slug: "mexborough",
    name: "Mexborough",
    countyOrRegion: "South Yorkshire",
    latitude: 53.4939,
    longitude: -1.2891,
  },
  {
    slug: "conisbrough",
    name: "Conisbrough",
    countyOrRegion: "South Yorkshire",
    latitude: 53.4810,
    longitude: -1.2295,
  },
  {
    slug: "hatfield",
    name: "Hatfield",
    countyOrRegion: "South Yorkshire",
    latitude: 53.5831,
    longitude: -0.9841,
  },
  {
    slug: "bawtry",
    name: "Bawtry",
    countyOrRegion: "South Yorkshire",
    latitude: 53.4318,
    longitude: -1.0213,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
