/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  doncaster: {
    neighborhoods: ["Bessacarr", "Cantley", "Intake", "Balby", "Wheatley Hills", "Hexthorpe", "Bentley", "Town Centre"],
    landmarks: ["Doncaster Minster", "Doncaster Racecourse", "Mansion House", "Cusworth Hall", "Keepmoat Stadium"],
    drainageInfo: "Doncaster sits on the flat plain of the River Don in South Yorkshire. The town's drainage infrastructure ranges from Victorian-era sewers beneath the town centre to modern systems in the post-war estates of Bessacarr, Cantley, and Intake. The flat terrain and proximity to the River Don make many areas susceptible to surface water flooding, particularly during heavy rainfall. Properties in Balby, Hexthorpe, and Bentley often have older clay pipe drainage that requires specialist knowledge. Yorkshire Water manages the public sewer network, and our engineers are experienced with the specific drainage challenges found across the Doncaster area.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Victorian terraces, semi-detached homes, post-war estates, modern developments, and commercial premises"
  },
  rotherham: {
    neighborhoods: ["Town Centre", "Brinsworth", "Wickersley", "Bramley", "Maltby", "Thurcroft", "Rawmarsh", "Kimberworth"],
    landmarks: ["Rotherham Minster", "Clifton Park", "Magna Science Adventure Centre", "New York Stadium", "Wentworth Woodhouse"],
    drainageInfo: "Rotherham sits at the confluence of the Rivers Don and Rother, giving the town its name. The town's industrial heritage has left a varied drainage landscape, from Victorian sewers in the town centre to modern systems in Wickersley and Brinsworth. Mining subsidence from the area's coal mining past can affect pipe alignment, and properties near the river corridors face heightened flood risk. Yorkshire Water manages the public network, but many older private drains need regular maintenance to keep them functioning properly.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "Victorian terraces, inter-war semis, council housing, modern estates, and commercial properties"
  },
  barnsley: {
    neighborhoods: ["Town Centre", "Wombwell", "Hoyland", "Penistone", "Dodworth", "Darton", "Mapplewell", "Monk Bretton"],
    landmarks: ["Barnsley Town Hall", "Experience Barnsley Museum", "Locke Park", "Cannon Hall", "Worsbrough Mill"],
    drainageInfo: "Barnsley is a large market town with a proud mining heritage, sitting on higher ground than Doncaster with the River Dearne to the south. The hilly terrain means gravity-fed drainage generally works well, but historic mining subsidence can cause pipe displacement in some areas. The town centre and older mining villages have Victorian-era sewers, while newer estates at Mapplewell and Dodworth have modern drainage systems. Yorkshire Water manages the public sewer network across the Barnsley area.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "Stone-built terraces, mining village housing, modern estates, and commercial premises"
  },
  scunthorpe: {
    neighborhoods: ["Town Centre", "Frodingham", "Crosby", "Bottesford", "Broughton", "Ashby", "Riddings", "Westcliff"],
    landmarks: ["North Lincolnshire Museum", "Central Park", "The Pods Leisure Centre", "Normanby Hall", "Glanford Park"],
    drainageInfo: "Scunthorpe is the principal town of North Lincolnshire, built on the iron and steel industry. The town sits on a limestone ridge providing generally good natural drainage, though clay subsoil in lower areas can cause waterlogging. Older parts of town around Frodingham and Crosby have Victorian-era drainage, while newer developments at Bottesford and Broughton have modern systems. Anglian Water manages the public sewer network in this area rather than Yorkshire Water.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "Victorian terraces, steel industry housing, modern estates, and commercial properties"
  },
  thorne: {
    neighborhoods: ["Town Centre", "Moorends", "Stainforth", "Thorne South", "King Street", "Fieldside"],
    landmarks: ["Thorne Memorial Park", "St Nicholas Church", "Thorne Canal Basin", "Thorne Moors", "Potteric Carr"],
    drainageInfo: "Thorne is a small market town east of Doncaster on the edge of the Humberhead Levels, one of the lowest-lying areas in England. The flat terrain and high water table create specific drainage challenges, with surface water needing active pumping in many areas. Properties in Thorne and Moorends can experience groundwater-related drainage issues, particularly during wet winters. The local drainage network relies on a combination of gravity flow and pumping stations.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Terraced houses, semi-detached homes, bungalows, and agricultural properties"
  },
  mexborough: {
    neighborhoods: ["Town Centre", "Denaby Main", "Old Denaby", "Swinton", "Dolcliffe Road", "Doncaster Road"],
    landmarks: ["St John the Baptist Church", "Mexborough Canal", "Denaby Ings Nature Reserve", "Montagu Hospital site"],
    drainageInfo: "Mexborough sits in the Don Valley between Doncaster and Rotherham, with the River Don and the Sheffield and South Yorkshire Navigation Canal passing through the town. The valley location means lower-lying properties face flood risk during heavy rainfall. The housing stock ranges from Victorian terraces to modern estates, with older properties often having shared drainage runs and ageing clay pipes. Yorkshire Water manages the public sewer network.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Victorian terraces, inter-war housing, modern estates, and commercial properties"
  },
  conisbrough: {
    neighborhoods: ["Town Centre", "Burcroft", "Old Road", "Ivanhoe Road", "Denaby Lane", "Low Road"],
    landmarks: ["Conisbrough Castle", "St Peter's Church", "Conisbrough Viaduct", "Earth Centre site"],
    drainageInfo: "Conisbrough is a historic town in the Don Valley, famous for its Norman castle. The town sits on higher ground above the River Don with steep streets descending towards the valley floor. Gravity-fed drainage works well in the upper parts, but properties at lower elevations near the river can experience flooding during heavy rain. The housing stock ranges from older stone-built properties near the castle to post-war estates and modern developments.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Stone-built terraces, post-war estates, modern developments, and commercial properties"
  },
  hatfield: {
    neighborhoods: ["Hatfield Village", "Hatfield Woodhouse", "Dunsville", "Stainforth", "Lindholme"],
    landmarks: ["Hatfield Manor", "St Lawrence Church", "Hatfield Chase", "Hatfield Water Park", "Hatfield Moors"],
    drainageInfo: "Hatfield sits on the former Hatfield Chase, a vast area of marshland drained in the 17th century. The landscape remains extremely flat and low-lying with a high water table and heavy reliance on pumped drainage. Properties in Hatfield, Hatfield Woodhouse, and Dunsville can experience drainage issues related to the high water table, particularly during wet winters. The local drainage infrastructure includes ditches, dykes, and pumping stations alongside the conventional sewer system.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Village properties, bungalows, semi-detached homes, and agricultural properties"
  },
  bawtry: {
    neighborhoods: ["High Street", "South Parade", "Station Road", "Austerfield", "Martin"],
    landmarks: ["Bawtry Hall", "St Nicholas Church", "The Crown Hotel", "River Idle"],
    drainageInfo: "Bawtry is an attractive market town on the Great North Road near the Nottinghamshire border, historically important as a coaching stop and inland port. The town features period properties along the high street and more modern residential areas. The River Idle flows near the town, and lower-lying properties can be affected during high river levels. Older drainage infrastructure serves many of the period properties, with some still connected to Victorian-era clay pipe systems.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Period properties, Georgian and Victorian townhouses, modern family homes, and commercial premises"
  }
};

/**
 * Get location-specific content for a location + service combination
 */
export interface LocationServiceContent {
  intro: string;
  localChallenges: string;
  coverage: string;
}

export function getLocationServiceContent(
  locationSlug: string,
  serviceName: string
): LocationServiceContent {
  const locationData = LOCATION_DATA[locationSlug];

  if (!locationData) {
    return {
      intro: `We provide professional ${serviceName.toLowerCase()} services in this area. Our experienced engineers deliver fast, reliable solutions with no call-out fee and fixed pricing.`,
      localChallenges: `Local drainage systems vary in age and condition. Our engineers carry modern diagnostic and clearance equipment to handle any situation efficiently.`,
      coverage: `We cover this area and surrounding neighbourhoods, with engineers positioned to respond quickly to both emergency and planned drainage work.`,
    };
  }

  return {
    intro: `We provide professional ${serviceName.toLowerCase()} services across ${locationData.neighborhoods.join(", ")}, and all surrounding areas. ${locationData.drainageInfo}`,
    localChallenges: `Our engineers regularly work with ${locationData.propertyTypes} in the area, each presenting different drainage characteristics. We carry specialist equipment for all property types and drainage systems found locally.`,
    coverage: `Our local engineers can reach you ${locationData.responseTime} for emergency callouts. We cover all parts of the area including neighbourhoods near ${locationData.landmarks.slice(0, 3).join(", ")}, and the surrounding streets and estates. Whether you need urgent help or want to book a planned appointment, we are ready to assist.`,
  };
}
