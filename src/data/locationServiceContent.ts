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
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  doncaster: {
    "blocked-drains": {
      intro: "Doncaster's mix of Victorian terraces and modern estates means blocked drains can affect properties across the town centre, Bessacarr, Cantley, and beyond. Our experienced engineers understand the drainage challenges posed by the flat terrain and proximity to the River Don, responding quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup in residential kitchens across Balby and Intake", "Tree root intrusion from mature street trees in established areas like Bessacarr", "Debris accumulation in Victorian clay pipes beneath the town centre", "Wet wipe blockages in modern apartments and housing developments", "Foreign object obstructions in commercial premises around the Frenchgate Centre"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties near the River Don and in low-lying areas of Hexthorpe and Bentley should consider annual drain inspections as the high water table and flat terrain can accelerate pipe deterioration and sediment buildup."
    },
    "drain-unblocking": {
      intro: "From the terraced streets of Balby to the family homes of Wheatley Hills, drain blockages are a common issue across Doncaster. Our local engineers carry a full range of unblocking equipment and can reach your property quickly to resolve the problem with minimal disruption.",
      commonProblems: ["Kitchen waste accumulation in older properties around Hexthorpe", "Sanitary product blockages in domestic drainage across Intake", "Leaf and debris buildup in external drains during autumn", "Scale deposits in hard water areas", "Shared drain blockages affecting multiple properties in terraced streets"],
      process: "We assess the blockage location using CCTV where needed, then select the most effective method — manual rodding, mechanical snake, or high-pressure jetting — to clear the obstruction completely.",
      localTip: "Doncaster's flat terrain means surface water drainage relies heavily on gravity flow working correctly. Regular maintenance prevents the gradual buildup that leads to sudden blockages."
    },
    "cctv-drain-surveys": {
      intro: "Whether you are buying a property in Bessacarr, investigating recurring drainage issues in Cantley, or need a pre-renovation survey in the town centre, our CCTV drain survey service provides the detailed information you need. Our HD camera equipment produces professional-grade reports accepted by solicitors and insurers.",
      commonProblems: ["Displaced joints in Victorian clay pipes", "Root ingress from mature gardens in Wheatley Hills", "Cracked pipes from mining subsidence in surrounding villages", "Corrosion in older cast iron drainage", "Bellied pipes causing standing water in flat terrain areas"],
      process: "We access your drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network. You receive a full report with annotated footage within 24 hours.",
      localTip: "Pre-purchase drain surveys are particularly valuable in Doncaster where older properties may have drainage affected by the town's flat terrain and high water table. A survey can reveal hidden issues before they become costly problems."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is one of the most effective ways to clear stubborn blockages and restore full flow in Doncaster properties. Our specialist jetting equipment handles everything from residential kitchen drains to commercial systems, with pressure carefully adjusted to suit the pipe material and condition.",
      commonProblems: ["Grease and fat deposits in kitchen drains", "Scale buildup from hard water in older pipes", "Root mass removal from established tree lines", "Sediment accumulation in flat-gradient drainage runs", "Commercial kitchen waste in town centre premises"],
      process: "We inspect the drainage to determine pipe material and condition, then use our specialist jetting unit to deliver water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean. A post-jetting camera check confirms the pipe is clear.",
      localTip: "Doncaster's flat topography means drains can accumulate sediment more quickly than in hillier areas. Regular jetting every 12 to 18 months helps maintain optimal flow, especially for properties in Bessacarr and Cantley."
    },
    "emergency-drain-services": {
      intro: "When you have a drainage emergency in Doncaster — whether it is sewage backing up, flooding from a blocked drain, or an overflowing manhole — our 24/7 emergency team is ready to respond. We operate around the clock, including nights, weekends, and bank holidays, reaching Doncaster properties typically within 60 minutes.",
      commonProblems: ["Sewage backup from blocked main drains", "Surface water flooding in low-lying areas near the River Don", "Collapsed drains in older properties", "Overflowing manholes during heavy rainfall", "Tree root damage causing sudden drainage failure"],
      process: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage. We then diagnose the root cause and implement the fastest effective repair.",
      localTip: "Properties in flood-risk areas near the River Don should have an emergency drainage plan. Know where your external drain covers are and keep our number to hand for rapid response when you need it most."
    },
    "drain-repairs": {
      intro: "From cracked Victorian clay pipes in the town centre to displaced joints in Bessacarr's residential streets, our drain repair service covers all types of damage found across Doncaster. We offer both no-dig pipe relining and traditional excavation repairs, selecting the most effective and least disruptive method for your situation.",
      commonProblems: ["Cracked clay pipes in Victorian and Edwardian properties", "Joint displacement from ground movement", "Root damage from mature garden trees", "Corrosion in older cast iron drainage", "Subsidence-related pipe damage in mining areas"],
      process: "We begin with a CCTV inspection to map the damage precisely, then explain all available repair options. No-dig relining is often ideal for residential properties, avoiding disruption to driveways, gardens, and landscaping.",
      localTip: "Doncaster's flat terrain and clay subsoil mean ground conditions can change with weather patterns. Consider proactive CCTV inspection of older drainage to catch developing problems before they become emergency repairs."
    }
  },
  rotherham: {
    "blocked-drains": {
      intro: "Rotherham's mix of Victorian terraces and modern estates presents diverse drainage challenges. From the town centre's older clay pipe systems to the newer developments in Wickersley and Brinsworth, our engineers are experienced with the full range of blockage types found across Rotherham.",
      commonProblems: ["Fat and grease buildup in terraced housing kitchens", "Tree root intrusion in established residential areas", "Debris accumulation in Victorian-era clay pipes", "Mining subsidence affecting pipe alignment", "Shared drain blockages in terraced streets"],
      process: "We diagnose the blockage using CCTV cameras where needed, then clear it using high-pressure jetting, mechanical rodding, or specialist cutting tools depending on the obstruction type.",
      localTip: "Properties near the River Don and Rother corridors face heightened flood risk. Regular drain maintenance helps ensure your drainage can cope during heavy rainfall events."
    },
    "drain-unblocking": {
      intro: "Whether your kitchen sink is backing up in Brinsworth or you have a blocked external drain in Maltby, our Rotherham drain unblocking service provides fast, effective solutions. Our engineers carry all the equipment needed to clear blockages on the spot.",
      commonProblems: ["Kitchen waste accumulation in older properties", "Sanitary product blockages in domestic drainage", "Leaf and debris buildup in external drains", "Scale deposits in hard water areas", "Root intrusion in garden drainage"],
      process: "We assess the blockage and select the most effective clearance method — manual rodding, mechanical snake, or high-pressure jetting — to restore full flow quickly.",
      localTip: "Rotherham's industrial heritage means some properties sit on made ground that can shift over time, affecting drain alignment. If you experience recurring blockages, a CCTV survey can identify underlying structural issues."
    },
    "cctv-drain-surveys": {
      intro: "Our CCTV drain survey service in Rotherham provides detailed inspection of your property's drainage system. Whether you need a pre-purchase survey, are investigating recurring problems, or want a comprehensive condition report, our HD camera equipment delivers professional results.",
      commonProblems: ["Displaced joints in older clay pipe systems", "Root ingress from mature vegetation", "Mining subsidence affecting pipe gradient", "Corrosion in cast iron drainage", "Bellied pipes in areas with ground movement"],
      process: "We access the drainage through manholes or inspection chambers and feed our HD camera through the pipe network. You receive a detailed report with annotated screenshots and prioritised recommendations.",
      localTip: "Mining subsidence can be a hidden issue in Rotherham properties. A CCTV drain survey before purchasing a property can reveal subsidence-related pipe damage that would otherwise go undetected."
    },
    "drain-jetting": {
      intro: "Our high-pressure drain jetting service in Rotherham clears stubborn blockages and restores full drainage flow. From grease-clogged kitchen drains to root-infiltrated garden drainage, our specialist equipment handles all situations effectively.",
      commonProblems: ["Grease and fat deposits in kitchen drains", "Root mass buildup in garden drainage", "Scale accumulation in older pipes", "Sediment deposits in slow-flowing drains", "Commercial waste in town centre premises"],
      process: "After assessing pipe condition and material, we use variable-pressure jetting to scour pipe walls clean. A post-jetting camera check confirms the pipe is fully clear.",
      localTip: "Rotherham properties with mature gardens should consider annual jetting to prevent root mass from building up inside drainage pipes. Prevention is always more cost-effective than emergency clearance."
    },
    "emergency-drain-services": {
      intro: "Our 24/7 emergency drain service covers all of Rotherham. Whether you have sewage backing up, flooding from a blocked drain, or a collapsed pipe, our emergency team responds quickly with all the equipment needed to resolve the situation.",
      commonProblems: ["Sewage backup from main drain blockages", "Surface water flooding during heavy rainfall", "Collapsed drains in older properties", "Overflowing manholes", "Sudden drainage failure from root damage"],
      process: "We prioritise containment and safety on arrival, then diagnose the root cause and implement the fastest effective resolution. Follow-up work is scheduled if needed.",
      localTip: "Keep our emergency number to hand, especially if you live near the Rivers Don or Rother. Quick response to drainage emergencies can significantly reduce property damage."
    },
    "drain-repairs": {
      intro: "Our Rotherham drain repair service handles everything from cracked pipes to collapsed drains. We offer both no-dig relining and excavation repairs, selecting the best method for your specific situation and property type.",
      commonProblems: ["Cracked clay pipes in older properties", "Mining subsidence causing pipe displacement", "Root damage from established trees", "Corrosion in cast iron systems", "Joint failure from ground movement"],
      process: "A CCTV inspection maps the damage precisely before we recommend the most effective repair method. No-dig relining avoids disruption to your property where possible.",
      localTip: "Rotherham's mining heritage means ground conditions can be unpredictable. Professional CCTV diagnosis ensures you only pay for repairs that are genuinely needed."
    }
  },
  barnsley: {
    "blocked-drains": {
      intro: "Barnsley's proud mining heritage has left a diverse housing stock with equally varied drainage systems. From stone-built terraces in the town centre to modern estates at Mapplewell and Dodworth, our engineers handle all types of blocked drains across the Barnsley area.",
      commonProblems: ["Fat and grease buildup in kitchen drains", "Tree root intrusion in older residential areas", "Debris in Victorian-era clay pipe systems", "Mining subsidence affecting pipe alignment and flow", "Shared drainage blockages in terraced mining villages"],
      process: "We diagnose the blockage using CCTV cameras where needed, then clear it using high-pressure jetting, mechanical rodding, or specialist cutting tools.",
      localTip: "Properties in former mining villages should be aware that historic subsidence can affect drainage gradients. If you notice slow drainage developing over time, a CCTV survey can identify whether pipe displacement is the cause."
    },
    "drain-unblocking": {
      intro: "From Wombwell to Penistone, our Barnsley drain unblocking service provides rapid response across the area. Our engineers carry manual rods, electric drain snakes, and jetting gear to clear any type of blockage on the spot.",
      commonProblems: ["Kitchen waste accumulation", "Sanitary product blockages", "Leaf and debris buildup in external drains", "Root intrusion from garden vegetation", "Scale deposits in older pipes"],
      process: "We assess the blockage and select the most effective clearance method to restore full flow with minimal disruption to your property.",
      localTip: "Barnsley's hilly terrain generally helps gravity-fed drainage, but properties at the bottom of slopes can receive runoff that overwhelms their drainage during heavy rain. Regular maintenance keeps your system ready for wet weather."
    },
    "cctv-drain-surveys": {
      intro: "Our CCTV drain survey service in Barnsley provides comprehensive inspection of residential and commercial drainage. Professional-grade reports are ideal for pre-purchase surveys, insurance claims, and ongoing drainage management.",
      commonProblems: ["Displaced joints from mining subsidence", "Root ingress in established areas", "Cracked stone and clay pipes", "Gradient changes from ground movement", "Age-related pipe deterioration"],
      process: "Our HD camera system is fed through the entire pipe network, producing detailed footage and a written report with prioritised recommendations for any repairs needed.",
      localTip: "Mining subsidence is a particular concern in Barnsley's outlying villages. A CCTV survey provides documentary evidence of pipe condition that can be invaluable for insurance purposes."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is highly effective for Barnsley properties dealing with stubborn blockages or accumulated deposits. Our variable-pressure equipment is safe for all pipe materials, from old stone drains to modern plastic systems.",
      commonProblems: ["Grease and fat deposits", "Root mass in garden drainage", "Scale buildup from hard water", "Sediment accumulation", "Commercial kitchen waste"],
      process: "We assess pipe condition first, then jet at the appropriate pressure to scour the pipe walls clean without risk of damage. Post-jetting CCTV confirms the result.",
      localTip: "Stone-built properties in Barnsley's mining villages often have older stone or clay drainage that benefits from regular low-pressure jetting to prevent gradual buildup."
    },
    "emergency-drain-services": {
      intro: "Our 24/7 emergency drain service covers all of Barnsley and surrounding villages. Sewage backup, flooding, and collapsed drains are all handled by our experienced emergency team.",
      commonProblems: ["Sewage backup from blocked main drains", "Surface water flooding", "Collapsed drains in older properties", "Overflowing manholes during storms", "Sudden pipe failure"],
      process: "We prioritise safety and containment, then diagnose and resolve the emergency as quickly as possible. Follow-up repairs are scheduled if needed.",
      localTip: "Barnsley's higher elevation means surface water runoff can be significant during heavy rain. Ensure your external drains and gullies are kept clear of leaves and debris."
    },
    "drain-repairs": {
      intro: "Our Barnsley drain repair service covers everything from minor crack repairs to full pipe replacement. We offer no-dig relining where possible, minimising disruption to your property.",
      commonProblems: ["Cracked stone and clay pipes", "Mining subsidence damage", "Root penetration", "Joint displacement", "Age-related deterioration"],
      process: "CCTV diagnosis first identifies the exact nature and extent of damage, then we recommend the most effective and cost-efficient repair method for your situation.",
      localTip: "The combination of mining history and hilly terrain in Barnsley means ground conditions can vary significantly even within a short distance. Professional diagnosis ensures the right repair method is used."
    }
  },
  scunthorpe: {
    "blocked-drains": {
      intro: "Scunthorpe's industrial heritage has shaped its housing stock and drainage infrastructure. From Victorian terraces in Frodingham to modern estates at Bottesford, our engineers are experienced with the drainage systems found across North Lincolnshire's principal town.",
      commonProblems: ["Fat and grease buildup in residential kitchens", "Tree root intrusion in established residential areas", "Debris in older clay pipe systems", "Waterlogging in clay subsoil areas", "Commercial drainage blockages"],
      process: "We diagnose and clear blockages using CCTV cameras, high-pressure jetting, and mechanical rodding as appropriate for the pipe type and blockage.",
      localTip: "Properties in lower-lying areas of Scunthorpe with clay subsoil can experience waterlogging that puts additional pressure on drainage. Regular inspection helps catch problems early."
    },
    "drain-unblocking": {
      intro: "Our drain unblocking service covers all areas of Scunthorpe, from the town centre to Ashby, Crosby, and the surrounding villages. We carry the full range of unblocking equipment to resolve any type of drain blockage on the spot.",
      commonProblems: ["Kitchen waste buildup", "Sanitary product blockages", "External drain debris", "Root intrusion", "Scale deposits"],
      process: "We assess and clear the blockage using the most effective method for the situation, restoring full flow quickly and with minimal disruption.",
      localTip: "Scunthorpe falls under Anglian Water rather than Yorkshire Water, so drainage regulations and connection procedures differ. Our engineers are familiar with Anglian Water's requirements."
    },
    "cctv-drain-surveys": {
      intro: "Professional CCTV drain surveys in Scunthorpe for homebuyers, property owners, and businesses. Our HD camera equipment produces detailed reports accepted by solicitors, insurers, and Anglian Water.",
      commonProblems: ["Displaced joints in older pipes", "Root ingress", "Cracked pipes from ground movement", "Corrosion in cast iron drainage", "Gradient issues in clay subsoil areas"],
      process: "We survey the complete drainage network using HD cameras, producing a detailed report with annotated footage and prioritised recommendations.",
      localTip: "Scunthorpe sits on a limestone ridge with varying ground conditions. A CCTV survey before purchasing can reveal drainage issues specific to the property's geology."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting for Scunthorpe properties, clearing stubborn blockages and accumulated deposits. Our equipment handles residential and commercial drainage with pressure adjusted for pipe material and condition.",
      commonProblems: ["Grease deposits", "Root mass", "Scale buildup", "Sediment accumulation", "Commercial waste deposits"],
      process: "We assess pipe condition, jet at the appropriate pressure, and verify the result with a camera check to confirm the pipe is fully clear.",
      localTip: "Scunthorpe's limestone geology means drainage pipes can accumulate mineral deposits over time. Regular jetting prevents this buildup from causing blockages."
    },
    "emergency-drain-services": {
      intro: "24/7 emergency drain service covering Scunthorpe and surrounding North Lincolnshire. Our emergency team responds to sewage backup, flooding, and drainage failures at any time of day or night.",
      commonProblems: ["Sewage backup", "Flooding from blocked drains", "Collapsed pipes", "Overflowing manholes", "Sudden drainage failure"],
      process: "We contain the emergency, diagnose the cause, and implement the fastest effective resolution. Follow-up work is arranged if structural repairs are needed.",
      localTip: "If you experience a drainage emergency in Scunthorpe, note that Anglian Water manages the public sewer network in this area. We can liaise with them on your behalf if the issue involves the public system."
    },
    "drain-repairs": {
      intro: "Drain repair service for Scunthorpe properties, covering cracked pipes, collapsed drains, and joint failures. We offer no-dig relining and excavation repairs with full CCTV diagnosis.",
      commonProblems: ["Cracked clay and concrete pipes", "Joint displacement", "Root damage", "Corrosion in metal pipes", "Ground movement damage"],
      process: "CCTV inspection identifies the damage, then we recommend and carry out the most effective repair — no-dig relining for accessible damage or excavation for severe collapses.",
      localTip: "Scunthorpe's varied geology means repair methods need to be matched to local ground conditions. Our engineers are experienced with the specific challenges of North Lincolnshire properties."
    }
  },
  thorne: {
    "blocked-drains": {
      intro: "Thorne and Moorends sit on the edge of the Humberhead Levels, one of England's lowest-lying areas. The flat terrain and high water table create specific drainage challenges that our engineers are well-equipped to handle.",
      commonProblems: ["Sediment buildup from high water table", "Root intrusion from garden vegetation", "Fat and grease accumulation", "Ground movement affecting pipe joints", "Surface water overwhelming domestic drains"],
      process: "We diagnose blockages using CCTV and clear them with jetting or rodding, paying special attention to the gradient and flow characteristics typical of low-lying drainage.",
      localTip: "Thorne's low-lying position means drainage relies partly on pumping stations. If you notice slow drainage after heavy rain, it may be a pumping issue rather than a blockage — call us and we can advise."
    },
    "drain-unblocking": {
      intro: "Our drain unblocking service covers Thorne, Moorends, and Stainforth. We understand the specific drainage challenges of low-lying areas and carry equipment suited to the conditions found here.",
      commonProblems: ["Kitchen waste buildup", "External drain debris and sediment", "Root intrusion", "High water table related issues", "Sanitary product blockages"],
      process: "We assess the blockage and clear it using the most appropriate method, ensuring full flow is restored and accounting for the area's specific drainage characteristics.",
      localTip: "In Thorne's flat terrain, even minor blockages can cause surface water issues because there is limited natural gradient to keep water moving. Prompt attention to slow drains prevents bigger problems."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys in Thorne and surrounding areas, providing detailed assessment of drainage condition. Particularly valuable for properties in this low-lying area where ground conditions can affect pipe stability.",
      commonProblems: ["Bellied pipes from soft ground", "Joint displacement", "Sediment accumulation", "Root ingress", "Ground movement in peat soils"],
      process: "We survey the drainage with HD cameras, producing reports that include information about pipe gradient and condition relevant to Thorne's specific ground conditions.",
      localTip: "The peat soils around Thorne can cause gradual pipe settlement. A CCTV survey reveals whether pipes are maintaining proper gradient for effective drainage."
    },
    "drain-jetting": {
      intro: "Drain jetting service for Thorne, Moorends, and Stainforth properties. Our variable-pressure equipment handles all pipe types and is particularly effective at clearing sediment buildup common in low-lying areas.",
      commonProblems: ["Sediment deposits from high water table", "Grease accumulation", "Root mass", "Mineral deposits", "Silt buildup"],
      process: "We assess pipe condition and material before jetting at the appropriate pressure. Post-jetting camera inspection confirms the pipe is fully clear.",
      localTip: "Properties in Thorne benefit from more frequent jetting than average due to the high water table and sediment-rich groundwater. Annual maintenance jetting keeps drainage flowing freely."
    },
    "emergency-drain-services": {
      intro: "24/7 emergency drain service for Thorne, Moorends, and Stainforth. We respond quickly to flooding, sewage backup, and drainage failures in this flood-sensitive low-lying area.",
      commonProblems: ["Flooding from overwhelmed drainage", "Sewage backup during high water table periods", "Collapsed drains in soft ground", "Pumping station failures affecting local drainage", "Storm water overwhelming domestic systems"],
      process: "We respond rapidly with pumping and containment equipment, then diagnose and resolve the underlying drainage failure.",
      localTip: "Thorne's low-lying position makes it particularly vulnerable to drainage emergencies during prolonged wet weather. Having an emergency plan and knowing your drainage layout can help minimise damage."
    },
    "drain-repairs": {
      intro: "Drain repair service for Thorne and surrounding areas, with expertise in the specific challenges of low-lying ground conditions. We offer no-dig relining and excavation repairs.",
      commonProblems: ["Bellied pipes from ground settlement", "Joint displacement in soft ground", "Root damage", "Pipe deterioration from high water table", "Ground movement cracking"],
      process: "CCTV diagnosis identifies the damage, and we recommend the best repair method considering Thorne's specific ground conditions.",
      localTip: "In Thorne's soft, low-lying ground, no-dig relining can be particularly advantageous as it avoids disturbing the surrounding soil structure, which can cause further pipe movement."
    }
  },
  mexborough: {
    "blocked-drains": {
      intro: "Mexborough sits in the Don Valley between Doncaster and Rotherham, with a housing stock ranging from Victorian terraces to modern estates. Our engineers are experienced with the drainage systems found across Mexborough and neighbouring Denaby Main and Swinton.",
      commonProblems: ["Fat and grease buildup in terraced housing", "Tree root intrusion", "Debris in older clay pipes", "Shared drainage blockages", "Valley floor flooding issues"],
      process: "We diagnose blockages using CCTV and clear them with the most appropriate method — jetting, rodding, or mechanical cutting tools.",
      localTip: "Mexborough's valley location means lower-lying properties can experience drainage issues during heavy rainfall. Keep external drains clear and consider annual inspection of older clay pipe systems."
    },
    "drain-unblocking": {
      intro: "Fast, effective drain unblocking across Mexborough, Denaby Main, and Swinton. Our local engineers carry all the equipment needed to clear blockages on the spot.",
      commonProblems: ["Kitchen waste buildup", "Sanitary product blockages", "External drain debris", "Root intrusion", "Shared drain obstructions"],
      process: "We assess and clear the blockage quickly, restoring full flow with minimal disruption to your property.",
      localTip: "Terraced properties in Mexborough often share drainage runs. If your neighbour is also experiencing slow drainage, the blockage may be in a shared section — we can locate and clear shared blockages efficiently."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys in Mexborough providing detailed assessment of your property's drainage. Ideal for pre-purchase surveys, investigating recurring problems, or planning renovation work.",
      commonProblems: ["Displaced joints in older pipes", "Root ingress", "Cracked pipes", "Shared drainage issues in terraced housing", "Valley floor settlement effects"],
      process: "HD camera survey of the complete drainage network, with a detailed report including annotated footage and recommendations.",
      localTip: "Mexborough's terraced housing often has shared drainage that is not always documented. A CCTV survey establishes exactly where your drainage goes and its condition."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting for Mexborough properties. Our equipment handles all pipe types and blockages, from grease-clogged kitchen drains to root-infiltrated garden systems.",
      commonProblems: ["Grease deposits", "Root mass", "Scale buildup", "Sediment", "Commercial waste"],
      process: "Pipe assessment, variable-pressure jetting, and post-jetting camera verification to confirm full clearance.",
      localTip: "Properties along the River Don corridor in Mexborough can accumulate alluvial sediment in their drainage. Regular jetting prevents this from causing blockages."
    },
    "emergency-drain-services": {
      intro: "24/7 emergency drain service for Mexborough and surrounding areas. Our emergency team responds to sewage backup, flooding, and drainage failures at any time.",
      commonProblems: ["Sewage backup", "Flooding from valley floor drainage issues", "Collapsed drains", "Overflowing manholes", "Storm water overwhelm"],
      process: "Rapid response with containment, diagnosis, and resolution. Follow-up repairs arranged if needed.",
      localTip: "Mexborough's Don Valley location means flood risk is real during extreme weather. Know where your drainage access points are and keep our number saved for emergencies."
    },
    "drain-repairs": {
      intro: "Drain repairs across Mexborough covering all types of damage. No-dig relining and excavation options available, with full CCTV diagnosis before any work begins.",
      commonProblems: ["Cracked clay pipes", "Joint displacement", "Root damage", "Corrosion", "Shared drainage failures"],
      process: "CCTV diagnosis followed by the most appropriate repair method for your situation and property type.",
      localTip: "Older terraced properties in Mexborough may have shared drainage that requires co-ordination between neighbours for repairs. We can advise on the best approach and manage the process."
    }
  },
  conisbrough: {
    "blocked-drains": {
      intro: "Conisbrough's historic character extends to its drainage, with properties ranging from older stone-built homes near the castle to post-war estates and modern developments. Our engineers understand the varied drainage challenges across this Don Valley town.",
      commonProblems: ["Fat and grease buildup", "Tree root intrusion from mature vegetation", "Debris in older stone and clay pipes", "Steep terrain causing flow issues", "Sediment buildup at lower elevations"],
      process: "We diagnose and clear blockages using CCTV, high-pressure jetting, and mechanical rodding as appropriate.",
      localTip: "Conisbrough's steep streets mean drainage flows quickly in upper areas but can accumulate debris at lower elevations near the River Don. Properties at the bottom of hills should monitor their drainage more closely."
    },
    "drain-unblocking": {
      intro: "Drain unblocking service for Conisbrough properties, from Burcroft to Low Road. Our engineers carry the equipment needed to clear any type of blockage quickly and effectively.",
      commonProblems: ["Kitchen waste buildup", "Sanitary product blockages", "Root intrusion", "Debris accumulation at grade changes", "External drain blockages"],
      process: "Assessment and clearance using the most effective method for the specific blockage and pipe type.",
      localTip: "Conisbrough's hilly terrain means gravity-fed drainage generally works well, but junctions where steeper pipes meet flatter runs can be blockage hotspots."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys for Conisbrough properties. Particularly valuable for older properties near the castle area where drainage infrastructure may be historic.",
      commonProblems: ["Displaced joints", "Root ingress", "Cracked older pipes", "Gradient changes", "Historic drainage connections"],
      process: "Complete HD camera survey with detailed report and recommendations.",
      localTip: "Conisbrough's older stone-built properties can have drainage dating back over a century. A survey establishes the condition and helps plan any necessary upgrades."
    },
    "drain-jetting": {
      intro: "Drain jetting for Conisbrough properties, with pressure adjusted for older pipe materials found in this historic town.",
      commonProblems: ["Grease deposits", "Root mass", "Scale buildup", "Sediment at lower elevations", "Mineral deposits"],
      process: "Pipe assessment, appropriate-pressure jetting, and camera verification of results.",
      localTip: "Properties at lower elevations in Conisbrough may need more frequent jetting due to sediment accumulation from upstream runoff."
    },
    "emergency-drain-services": {
      intro: "24/7 emergency drain service for Conisbrough. We respond quickly to drainage emergencies at any time of day or night.",
      commonProblems: ["Sewage backup", "Flooding at lower elevations", "Collapsed older drains", "Overflow from steep-gradient systems", "Storm water issues"],
      process: "Rapid response, containment, diagnosis, and resolution with follow-up support as needed.",
      localTip: "Properties near the River Don at the bottom of Conisbrough's slopes should have an emergency plan for drainage failures during heavy rainfall."
    },
    "drain-repairs": {
      intro: "Drain repairs for Conisbrough properties, with expertise in both historic and modern drainage systems. No-dig and excavation options available.",
      commonProblems: ["Cracked stone and clay pipes", "Joint displacement on steep gradients", "Root damage", "Age-related deterioration", "Ground movement effects"],
      process: "CCTV diagnosis followed by the most effective repair method for your property and its specific drainage layout.",
      localTip: "Conisbrough's steep terrain can put stress on pipe joints over time. Proactive repair of developing cracks prevents more costly failures later."
    }
  },
  hatfield: {
    "blocked-drains": {
      intro: "Hatfield and Hatfield Woodhouse sit on the former Hatfield Chase marshland, creating unique drainage challenges. The flat terrain, high water table, and heavy reliance on pumped drainage mean our engineers need specialist knowledge to resolve blockages effectively.",
      commonProblems: ["Sediment buildup from high water table", "Fat and grease accumulation", "Root intrusion", "Ground movement affecting joints", "Surface water overwhelming domestic drains"],
      process: "We diagnose blockages using CCTV and clear them with appropriate methods, accounting for the specific drainage characteristics of this low-lying area.",
      localTip: "Hatfield's former marshland means the water table is often close to surface level. This can cause groundwater infiltration into damaged pipes, making it important to repair cracks and joint failures promptly."
    },
    "drain-unblocking": {
      intro: "Drain unblocking service for Hatfield, Hatfield Woodhouse, and Dunsville. We understand the drainage challenges of this low-lying area and carry equipment suited to the conditions.",
      commonProblems: ["Kitchen waste buildup", "Sediment and silt in drains", "Root intrusion", "High water table effects", "External drain debris"],
      process: "Quick assessment and effective clearance using the most appropriate method for the specific blockage and conditions.",
      localTip: "In Hatfield's flat terrain, maintaining proper drain gradient is critical. If you notice drainage slowing over time, it may indicate pipe settlement rather than a simple blockage."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys in Hatfield, providing essential information about drainage condition in this challenging low-lying area. Particularly valuable for property purchases and planning applications.",
      commonProblems: ["Bellied pipes from soft ground", "Joint displacement", "Groundwater infiltration", "Root ingress", "Sediment accumulation"],
      process: "Complete HD camera survey with detailed report, paying particular attention to pipe gradient and ground condition indicators.",
      localTip: "Hatfield's former marshland ground conditions make pre-purchase drain surveys especially important. Pipe settlement is common and can be costly to repair if not identified early."
    },
    "drain-jetting": {
      intro: "Drain jetting for Hatfield properties, particularly effective at clearing the sediment buildup common in this low-lying area.",
      commonProblems: ["Sediment deposits", "Grease accumulation", "Root mass", "Silt buildup", "Mineral deposits from groundwater"],
      process: "Pipe assessment, variable-pressure jetting suited to the pipe material, and camera verification.",
      localTip: "Hatfield properties benefit from regular jetting due to the sediment-rich groundwater. Annual maintenance jetting is recommended for properties with older drainage systems."
    },
    "emergency-drain-services": {
      intro: "24/7 emergency drain service for Hatfield and surrounding areas. Fast response to flooding, sewage backup, and drainage failures in this flood-sensitive area.",
      commonProblems: ["Flooding from overwhelmed drainage", "Sewage backup during high water table", "Collapsed drains in soft ground", "Pumping failures", "Storm water overwhelm"],
      process: "Rapid response with pumping and containment, followed by diagnosis and resolution of the underlying issue.",
      localTip: "Hatfield's low-lying position on the former Hatfield Chase makes drainage emergencies more likely during prolonged wet weather. Proactive maintenance reduces emergency risk."
    },
    "drain-repairs": {
      intro: "Drain repairs for Hatfield properties with expertise in the specific challenges of low-lying, former marshland ground conditions.",
      commonProblems: ["Bellied pipes from ground settlement", "Joint displacement", "Root damage", "Groundwater-related deterioration", "Soft ground movement"],
      process: "CCTV diagnosis followed by repair recommendations suited to Hatfield's ground conditions. No-dig relining is often preferred to avoid disturbing the surrounding soil.",
      localTip: "In Hatfield's soft ground, no-dig relining is often the best repair option as excavation can disturb the water table and cause further pipe movement."
    }
  },
  bawtry: {
    "blocked-drains": {
      intro: "Bawtry's attractive period properties along the High Street and surrounding areas present specific drainage challenges. Our engineers are experienced with the older drainage systems found in this historic market town and the newer residential developments nearby.",
      commonProblems: ["Fat and grease buildup in period property kitchens", "Tree root intrusion from mature gardens and street trees", "Debris in Victorian-era clay pipe systems", "Ageing pipe joint failures", "Shared drainage in connected townhouses"],
      process: "We diagnose and clear blockages carefully, using methods appropriate to the age and condition of Bawtry's varied drainage infrastructure.",
      localTip: "Bawtry's period properties often have older clay pipe drainage that needs careful handling. We use appropriate pressure settings and methods to clear blockages without damaging historic pipework."
    },
    "drain-unblocking": {
      intro: "Drain unblocking service for Bawtry and neighbouring Austerfield and Martin. Fast, effective clearance of all types of drain blockage.",
      commonProblems: ["Kitchen waste in period property drains", "Root intrusion from established gardens", "Sanitary product blockages", "Shared drainage issues", "External drain debris"],
      process: "Assessment and clearance using methods suited to the pipe type and property age.",
      localTip: "Bawtry's Georgian and Victorian townhouses along the High Street often have shared drainage that has evolved over centuries. Understanding the layout is key to effective unblocking."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys for Bawtry properties. Essential for pre-purchase inspections of period properties and investigating recurring drainage problems.",
      commonProblems: ["Displaced joints in clay pipes", "Root ingress from mature vegetation", "Historic drainage connections", "Pipe deterioration", "Unknown shared drainage runs"],
      process: "HD camera survey with detailed report, mapping the drainage layout and identifying any defects or concerns.",
      localTip: "Period properties in Bawtry can have drainage systems that have been modified multiple times over the decades. A CCTV survey maps the actual layout, which may differ from any available plans."
    },
    "drain-jetting": {
      intro: "Careful, pressure-adjusted drain jetting for Bawtry properties. Our equipment handles everything from delicate older clay pipes to robust modern systems.",
      commonProblems: ["Grease deposits in older pipes", "Root mass from mature gardens", "Scale and mineral deposits", "Sediment accumulation", "Historic pipe deposits"],
      process: "Pipe assessment to determine material and condition, then appropriate-pressure jetting with camera verification.",
      localTip: "Bawtry's period properties require lower jetting pressures to avoid damaging older clay pipe systems. Our engineers adjust settings for each specific pipe type."
    },
    "emergency-drain-services": {
      intro: "24/7 emergency drain service for Bawtry. We respond quickly to protect Bawtry's period properties from drainage emergencies.",
      commonProblems: ["Sewage backup in older systems", "Flooding near the River Idle", "Collapsed historic drains", "Overflow from shared drainage", "Sudden pipe failure"],
      process: "Rapid response, containment, and resolution with appropriate care for period property fabric.",
      localTip: "Properties near the River Idle in Bawtry can be affected during high river levels. If you experience drainage backing up during wet weather, contact us promptly to prevent property damage."
    },
    "drain-repairs": {
      intro: "Specialist drain repairs for Bawtry properties, including period and listed buildings. We use methods that respect the character of older properties while delivering reliable, long-lasting repairs.",
      commonProblems: ["Cracked Victorian clay pipes", "Joint failures in ageing systems", "Root damage from mature trees", "Historic pipe deterioration", "Shared drainage complications"],
      process: "CCTV diagnosis followed by repair recommendations appropriate to the property type and drainage material.",
      localTip: "For Bawtry's period properties, no-dig relining is often the ideal repair method as it avoids disturbing historic fabric, gardens, and driveways while creating a new pipe within the old one."
    }
  }
};

/**
 * How It Works steps per service (with {location} and {responseTime} placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with Yorkshire Water infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and Yorkshire Water"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across Doncaster and surrounding areas"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Doncaster and surrounding areas and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Doncaster and surrounding areas. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Doncaster and surrounding areas and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}
