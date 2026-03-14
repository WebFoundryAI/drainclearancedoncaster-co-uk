/**
 * Location hub page content: Drainage profiles, landmarks, FAQs, and case studies
 * Each location has unique, genuinely researched content optimized for SEO and user experience
 */

export interface LocationHubFAQ {
  question: string;
  answer: string;
}

export interface LocationHubContent {
  landmarks: string[];
  drainageProfile: string;
  localFAQs: LocationHubFAQ[];
  caseStudy: string;
}

export const LOCATION_HUB_CONTENT: Record<string, LocationHubContent> = {
  doncaster: {
    landmarks: [
      "Doncaster Minster",
      "Mansion House",
      "Doncaster Racecourse",
      "Cusworth Hall",
      "Doncaster Market",
      "Frenchgate Shopping Centre",
      "Cast Theatre",
      "Doncaster Railway Station",
      "Lakeside Village",
      "Town Moor",
      "Sandall Park",
      "Elmfield Park",
      "Doncaster Museum",
      "St George Minster Church",
      "Keepmoat Stadium",
      "Bennetthorpe",
      "Bessacarr",
      "Cantley Park",
      "Hexthorpe Flatts",
      "Intake",
      "Wheatley Hills",
      "Balby"
    ],
    drainageProfile: "Doncaster sits on the flat, low-lying plain of the River Don in South Yorkshire. The town's drainage infrastructure reflects its long history as a railway and market town, with Victorian-era sewers beneath the town centre connecting to more modern systems in the post-war housing estates of Bessacarr, Cantley, and Intake. The flat terrain and proximity to the River Don, River Cheswold, and the historic Hatfield Chase mean that many parts of Doncaster are susceptible to surface water flooding. Properties near the Don corridor and in low-lying areas such as Bentley, Hexthorpe, and Wheatley often experience drainage issues during heavy rainfall. The town's mining heritage also left behind subsidence in some areas, which can affect underground pipe alignment. Yorkshire Water manages the public sewer network, but many older properties in Balby, Hyde Park, and the town centre still rely on ageing clay pipe drainage that requires specialist maintenance.",
    localFAQs: [
      {
        question: "What drainage problems are common in Doncaster?",
        answer: "Doncaster's flat terrain and proximity to the River Don make surface water drainage a common concern. Older properties in the town centre and Balby often have ageing clay pipes prone to root ingress and joint displacement. The low-lying areas near Bentley and Hexthorpe can experience flooding during prolonged rain. Our team is experienced with the specific drainage challenges across Doncaster."
      },
      {
        question: "Do you cover all areas of Doncaster?",
        answer: "Yes. We cover the entire Doncaster metropolitan area including the town centre, Bessacarr, Cantley, Intake, Balby, Wheatley Hills, Hexthorpe, Bentley, Armthorpe, Edenthorpe, Kirk Sandall, and all surrounding villages."
      },
      {
        question: "How quickly can you reach Doncaster for an emergency?",
        answer: "We have engineers based locally and can typically reach any part of Doncaster within 60 minutes for emergency callouts. We operate 24/7 including bank holidays."
      },
      {
        question: "Can you help with flooding near the River Don?",
        answer: "Yes. Properties near the Don corridor are particularly susceptible to drainage overload during heavy rainfall. We provide emergency pumping, drain clearance, and can install flood prevention measures. If the issue involves the public sewer network, we can diagnose this and advise you on contacting Yorkshire Water."
      }
    ],
    caseStudy: "A homeowner in Bessacarr contacted us after noticing slow drainage from both the kitchen and bathroom. During a CCTV survey, we discovered a partial collapse in the clay pipe running beneath the rear garden, caused by subsidence common in the area. Tree roots from a neighbouring property had also entered through a displaced joint. We cleared the roots using high-pressure jetting and repaired the collapsed section using trenchless pipe relining, avoiding the need to excavate the patio. The repair was completed within a single day, restoring full drainage flow."
  },

  rotherham: {
    landmarks: [
      "Rotherham Minster",
      "Clifton Park",
      "Magna Science Adventure Centre",
      "Rotherham Town Hall",
      "Chapel of Our Lady",
      "Boston Castle",
      "Wentworth Woodhouse",
      "Catcliffe Glass Cone",
      "Rother Valley Country Park",
      "New York Stadium"
    ],
    drainageProfile: "Rotherham sits at the confluence of the Rivers Don and Rother in South Yorkshire, giving the town its name. The town's industrial past, centred on steelmaking and coal mining, has left a varied drainage landscape. The town centre features Victorian-era sewers serving older terraced housing, while surrounding areas such as Brinsworth, Wickersley, and Bramley have more modern drainage systems. Subsidence from historic mining activity can affect pipe alignment in some areas, and properties near the river corridors are at heightened flood risk. Yorkshire Water manages the public network, but many private drains serving older properties require regular maintenance.",
    localFAQs: [
      {
        question: "What drainage issues are common in Rotherham?",
        answer: "Rotherham's position at the confluence of two rivers means flood risk is a key concern. Older properties in the town centre often have clay pipe drainage susceptible to root ingress. Mining subsidence in some areas can cause pipe displacement. Our engineers understand these local challenges and carry the equipment to deal with them."
      },
      {
        question: "How quickly can you reach Rotherham?",
        answer: "We can typically reach Rotherham within 60 to 90 minutes for emergency callouts. We cover all areas including the town centre, Brinsworth, Wickersley, Bramley, Maltby, and surrounding villages."
      },
      {
        question: "Do you work with commercial properties in Rotherham?",
        answer: "Yes, we provide drainage services for commercial properties of all sizes in Rotherham, including offices, retail units, restaurants, and industrial premises near the Magna Business Park and town centre."
      }
    ],
    caseStudy: "A restaurant near Rotherham town centre called us after sewage backed up through the kitchen floor drain during service. Our emergency team arrived within the hour and used CCTV to locate a severe fat and grease blockage in the underground drainage run. High-pressure jetting cleared the obstruction and restored flow. We recommended a quarterly maintenance jetting schedule to prevent recurrence, which the business has followed without further incident."
  },

  barnsley: {
    landmarks: [
      "Barnsley Town Hall",
      "Experience Barnsley Museum",
      "Locke Park",
      "Eldon Street Shopping Centre",
      "Barnsley Market",
      "Cannon Hall Museum",
      "Worsbrough Mill",
      "Barnsley Civic Theatre",
      "Oakwell Stadium",
      "Barnsley Main Colliery"
    ],
    drainageProfile: "Barnsley is a large market town in South Yorkshire with a proud coal mining heritage. The town sits on higher ground than Doncaster, with the River Dearne flowing to the south. Barnsley's drainage infrastructure includes Victorian sewers in the town centre and older mining villages, alongside modern systems in newer estates at Mapplewell, Dodworth, and Darton. The hilly terrain means gravity-fed drainage works well in most areas, but ground movement from historic mining can affect pipe joints in some locations. Yorkshire Water manages the public sewer network.",
    localFAQs: [
      {
        question: "What drainage problems do you see in Barnsley?",
        answer: "Common issues in Barnsley include root ingress in older clay pipes, joint displacement from historic mining subsidence, and grease blockages in terraced properties with shared drainage runs. We carry specialist equipment for all these situations."
      },
      {
        question: "How quickly can you get to Barnsley?",
        answer: "We typically reach Barnsley within 60 to 90 minutes for emergency callouts, covering all areas including the town centre, Wombwell, Hoyland, Penistone, and surrounding villages."
      },
      {
        question: "Do you cover rural areas around Barnsley?",
        answer: "Yes, we cover the entire Barnsley borough including rural villages and properties with private drainage systems or septic tanks."
      }
    ],
    caseStudy: "A homeowner in Wombwell contacted us after their outside drain began overflowing during heavy rain. Our CCTV inspection revealed a significant root mass from a mature sycamore tree had penetrated the clay pipe at a joint. We cleared the roots using high-pressure jetting and repaired the affected joint using a localised patch liner, preventing further root entry without the need for excavation."
  },

  scunthorpe: {
    landmarks: [
      "North Lincolnshire Museum",
      "Central Park",
      "The Pods Leisure Centre",
      "St Lawrence Church",
      "Normanby Hall Country Park",
      "Quibell Park Stadium",
      "Glanford Park",
      "Scunthorpe High Street",
      "Ashby Ville Nature Reserve",
      "Brumby Hall"
    ],
    drainageProfile: "Scunthorpe is the principal town of North Lincolnshire, built on the iron and steel industry. The town sits on a limestone ridge, which provides generally good natural drainage, though the clay subsoil in lower-lying parts of the town can cause waterlogging. Drainage infrastructure varies from Victorian-era sewers in the older parts of town around Frodingham and Crosby to modern systems in newer developments at Bottesford and Broughton. Anglian Water manages the public sewer network in this area. Properties on the lower ground towards the Trent valley can be susceptible to groundwater issues.",
    localFAQs: [
      {
        question: "Do you cover Scunthorpe even though it is in North Lincolnshire?",
        answer: "Yes, Scunthorpe is well within our service area. We regularly attend callouts in Scunthorpe and can typically arrive within 60 to 90 minutes for emergencies."
      },
      {
        question: "What drainage issues are common in Scunthorpe?",
        answer: "Older properties around Frodingham and Crosby often have ageing clay pipes that are prone to cracking and root ingress. The clay subsoil in lower parts of the town can also cause waterlogging and slow drainage. We carry equipment to handle all these issues."
      },
      {
        question: "Who manages the public sewers in Scunthorpe?",
        answer: "Anglian Water manages the public sewer network in North Lincolnshire. If we diagnose a problem in the public sewer during our visit, we will advise you on how to report it."
      }
    ],
    caseStudy: "A property owner in Crosby called us after their ground-floor toilet began backing up repeatedly. Our CCTV survey found that a section of the clay soil pipe beneath the drive had cracked, allowing soil to enter and partially block the pipe. We repaired the damaged section using trenchless relining, avoiding the need to dig up the driveway. The repair was completed in under four hours."
  },

  thorne: {
    landmarks: [
      "Thorne Memorial Park",
      "St Nicholas Church",
      "Thorne Canal Basin",
      "Potteric Carr Nature Reserve",
      "Thorne Moors",
      "The Moorends",
      "Thorne North Station",
      "King Street",
      "Thorne Colliery site"
    ],
    drainageProfile: "Thorne is a small market town east of Doncaster, sitting on the edge of the Humberhead Levels — one of the lowest-lying areas in England. The flat terrain and high water table create particular drainage challenges, with surface water needing to be actively pumped in many areas. Much of the surrounding land was historically marshland reclaimed for agriculture. Properties in Thorne and neighbouring Moorends can experience groundwater-related drainage issues, especially during wet winters. The local drainage network relies on a combination of gravity flow and pumping stations managed by Yorkshire Water and the Internal Drainage Boards.",
    localFAQs: [
      {
        question: "Why do properties in Thorne have more drainage problems?",
        answer: "Thorne sits on the edge of the Humberhead Levels, one of the lowest-lying areas in England. The high water table and flat terrain mean drainage systems work harder than in hilly areas. During wet weather, surcharging of drains and surface water flooding are more common."
      },
      {
        question: "Can you help with groundwater flooding in Thorne?",
        answer: "Yes, we provide emergency pumping and drainage clearance for properties affected by groundwater and surface water flooding. We can also advise on preventative measures such as non-return valves to reduce the risk of future flooding."
      },
      {
        question: "How quickly can you reach Thorne?",
        answer: "We can typically reach Thorne within 60 minutes for emergency callouts, covering Thorne, Moorends, Stainforth, and surrounding areas."
      }
    ],
    caseStudy: "A homeowner in Moorends contacted us after their garden drain overflowed during a period of heavy rain. Our investigation found that a non-return valve on the property's connection to the public sewer had failed, allowing water from the surcharging sewer to back up into the private drainage. We replaced the valve and jetted the full drainage run to clear accumulated silt, restoring proper function."
  },

  mexborough: {
    landmarks: [
      "Mexborough Town Centre",
      "St John the Baptist Church",
      "Mexborough and Swinton Station",
      "Denaby Main",
      "Old Denaby",
      "Mexborough Canal",
      "Dolcliffe Road",
      "Montagu Hospital site",
      "Ferry Boat Lane"
    ],
    drainageProfile: "Mexborough sits in the Don Valley between Doncaster and Rotherham, with the River Don and the Sheffield and South Yorkshire Navigation Canal passing through the town. The valley location and proximity to waterways create flood risk for lower-lying properties, particularly in Denaby Main and along the river corridor. The town's housing stock includes Victorian terraces, inter-war council housing, and modern estates, each with different drainage characteristics. Older properties often have shared drainage runs and ageing clay pipes. Yorkshire Water manages the public sewer network.",
    localFAQs: [
      {
        question: "What drainage issues are common in Mexborough?",
        answer: "Properties near the River Don and canal corridor can experience drainage overload during heavy rainfall. Older terraced properties in the town centre often have shared drainage runs that can cause multiple properties to be affected by a single blockage. We regularly attend both emergency and planned drainage work in Mexborough."
      },
      {
        question: "Do you cover Denaby Main?",
        answer: "Yes, we cover Mexborough, Denaby Main, Old Denaby, Swinton, and all surrounding areas."
      },
      {
        question: "How quickly can you reach Mexborough?",
        answer: "We can typically reach Mexborough within 60 minutes for emergency callouts."
      }
    ],
    caseStudy: "A landlord in Denaby Main contacted us after tenants reported foul smells and slow drainage in a row of terraced houses. Our CCTV inspection of the shared drainage run revealed a significant buildup of fat and debris combined with a displaced joint allowing root ingress. We jetted the full length of the shared drain and repaired the displaced joint with a localised patch liner. The issue was resolved for all affected properties in a single visit."
  },

  conisbrough: {
    landmarks: [
      "Conisbrough Castle",
      "St Peter's Church",
      "Conisbrough Viaduct",
      "Earth Centre site",
      "Old Road",
      "Burcroft",
      "Denaby Ings Nature Reserve",
      "Conisbrough Parks",
      "Ivanhoe Road"
    ],
    drainageProfile: "Conisbrough is a historic town in the Don Valley, famous for its well-preserved Norman castle keep. The town sits on higher ground above the River Don, with steep streets descending towards the valley floor. This topography means gravity-fed drainage generally works well in the upper parts of the town, but properties at lower elevations near the river and viaduct can experience flooding during heavy rain. The housing stock ranges from older stone-built properties near the castle to post-war estates and modern developments. Older properties often have clay pipe drainage that requires careful maintenance.",
    localFAQs: [
      {
        question: "What drainage problems are common in Conisbrough?",
        answer: "Properties on the lower slopes near the Don valley can experience surface water flooding during heavy rain. Older stone-built properties near the castle and town centre often have clay pipe drainage susceptible to root ingress and joint displacement. We have experience with all these issues."
      },
      {
        question: "How quickly can you get to Conisbrough?",
        answer: "We can typically reach Conisbrough within 60 minutes for emergency callouts. We cover all parts of the town including Burcroft, Old Road, and the surrounding areas."
      },
      {
        question: "Do you handle commercial drainage in Conisbrough?",
        answer: "Yes, we provide drainage services for both residential and commercial properties in Conisbrough, including shops, pubs, and hospitality businesses."
      }
    ],
    caseStudy: "A homeowner on the hillside near Conisbrough Castle called us after heavy rain caused water to back up through their patio drain and flood the rear of the property. Our investigation revealed that the stormwater drainage pipe running down the hillside had partially collapsed under the weight of the soil above it. We excavated the damaged section and replaced it with a new pipe, then installed a silt trap to prevent debris from accumulating in the repaired section."
  },

  hatfield: {
    landmarks: [
      "Hatfield Manor",
      "St Lawrence Church",
      "Hatfield Chase",
      "Hatfield Moors",
      "Hatfield Water Park",
      "Lindholme",
      "Hatfield Colliery site",
      "Dunsville",
      "Hatfield Woodhouse"
    ],
    drainageProfile: "Hatfield is a village and civil parish on the eastern edge of Doncaster, sitting on the former Hatfield Chase — a vast area of marshland that was drained in the 17th century by the Dutch engineer Cornelius Vermuyden. The landscape remains extremely flat and low-lying, with a high water table and heavy reliance on pumped drainage. Properties in Hatfield, Hatfield Woodhouse, Dunsville, and the surrounding area can experience drainage issues related to the high water table, particularly during wet winters. The local drainage infrastructure includes a network of ditches, dykes, and pumping stations in addition to the conventional sewer system managed by Yorkshire Water.",
    localFAQs: [
      {
        question: "Why is drainage more challenging in Hatfield?",
        answer: "Hatfield sits on the former Hatfield Chase, one of the lowest-lying areas in England. The high water table and flat terrain mean that drainage systems have to work harder, and properties can be affected by groundwater rising during wet weather. Our engineers understand these specific challenges."
      },
      {
        question: "Can you help with waterlogged gardens in Hatfield?",
        answer: "Yes, we can investigate and improve land drainage to reduce waterlogging. This may include clearing blocked field drains, installing soakaways, or connecting to the existing drainage network. We assess each property individually to recommend the most effective solution."
      },
      {
        question: "How quickly can you reach Hatfield?",
        answer: "We can typically reach Hatfield within 45 to 60 minutes for emergency callouts, covering Hatfield, Hatfield Woodhouse, Dunsville, and Stainforth."
      }
    ],
    caseStudy: "A homeowner in Hatfield Woodhouse contacted us after their septic tank drainage field stopped functioning during a wet winter. The high water table had saturated the ground around the soakaway, preventing effluent from dispersing. We installed a new raised drainage mound system that functions effectively even when the water table is high, and cleared the blocked pipework connecting the property to the tank."
  },

  bawtry: {
    landmarks: [
      "Bawtry Hall",
      "St Nicholas Church",
      "Bawtry High Street",
      "The Crown Hotel",
      "Bawtry Paintball Fields",
      "Idle River",
      "Austerfield",
      "RAF Finningley site (Doncaster Sheffield Airport)",
      "Martin Common"
    ],
    drainageProfile: "Bawtry is an attractive market town on the Great North Road (A638) near the Nottinghamshire border, historically important as a coaching stop and inland port on the River Idle. The town features a mix of period properties along the high street and more modern residential areas. The River Idle flows through the edge of the town, and lower-lying properties can be affected during periods of high river levels. The town's older drainage infrastructure dates from various periods, with some properties still connected to Victorian-era clay pipe systems. Yorkshire Water manages the public sewer network in the area.",
    localFAQs: [
      {
        question: "What drainage issues are common in Bawtry?",
        answer: "Bawtry's period properties along the high street often have older clay pipe drainage that requires maintenance. Properties near the River Idle can experience drainage issues during periods of high water. We regularly work with both types of challenge."
      },
      {
        question: "Do you cover villages near Bawtry?",
        answer: "Yes, we cover Bawtry and all surrounding villages including Austerfield, Misson, Blyth, Harworth, and Tickhill."
      },
      {
        question: "How quickly can you reach Bawtry?",
        answer: "We can typically reach Bawtry within 60 minutes for emergency callouts."
      }
    ],
    caseStudy: "The owner of a period property on Bawtry High Street called us after noticing a persistent damp patch in the cellar. Our CCTV inspection revealed that a Victorian clay drain running beneath the cellar floor had developed multiple cracks, allowing groundwater to seep in during wet weather. We repaired the pipe using trenchless relining, sealing the cracks without the need to excavate the cellar floor. The damp problem was resolved within two days."
  }
};

export function getLocationHubContent(locationSlug: string): LocationHubContent | undefined {
  return LOCATION_HUB_CONTENT[locationSlug];
}
