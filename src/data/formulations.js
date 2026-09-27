export const formulations=[
{id:"F1",name:"Oxidised biochar + ammonium phosphate",short:"Ox-BC + MAP",colour:"#0f766e",adsorption:8.7,release:6.8,stability:8.2,strength:7.5,soilFit:8.5,cropResponse:8.3,score:81},
{id:"F2",name:"Mineral-coated biochar + urea",short:"Min-BC + Urea",colour:"#d97706",adsorption:7.5,release:8.1,stability:7.4,strength:8.6,soilFit:7.8,cropResponse:8.0,score:79},
{id:"F3",name:"Steam-activated biochar + NPK",short:"SA-BC + NPK",colour:"#2563eb",adsorption:9.1,release:5.9,stability:8.8,strength:6.9,soilFit:7.1,cropResponse:7.4,score:75}];
export const energies=[{interaction:"NH4+-carboxyl",F1:-62,F2:-48,F3:-54},{interaction:"PO4-mineral",F1:-71,F2:-84,F3:-52},{interaction:"K+-surface",F1:-35,F2:-39,F3:-46},{interaction:"Urea-surface",F1:-28,F2:-57,F3:-31}];
export const release=Array.from({length:13},(_,i)=>{const day=i*5;return{day,F1:+(100*(1-Math.exp(-.032*day))).toFixed(1),F2:+(100*(1-Math.exp(-.041*day))).toFixed(1),F3:+(100*(1-Math.exp(-.024*day))).toFixed(1)}});
export const crops=[{crop:"Spring barley",control:100,F1:122,F2:118,F3:113},{crop:"Winter wheat",control:100,F1:119,F2:124,F3:115}];