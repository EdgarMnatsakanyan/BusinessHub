import FirstPage from "../../FirstPage";
import Arter from "../../IndividualPages/arter/Arter";
import Artfood from "../../IndividualPages/artfood/Artfood";
import HLF from "../../IndividualPages/hlf/HLF";
import Hundred from "../../IndividualPages/hundred/Hundred";
import Process from "../../Process";
import Projects from "../../Projects";
import Servers from "../../Servers";
import WorkWithUs from "../../WorkWithUs";
import BrandingIndividual from "../brandingIndividual/BrandingIndividual";
import DigitalIndividual from "../digitalIndividual/DigitalIndividual";
import MarketingIndividual from "../marketingIndividual/MarketingIndividual";
import WebDesignIndividual from "../webDesignIndividual/WebDesignIndividual";



export const RouteInPages = [
    {path: '/', component: FirstPage, exact: true},
    {path: '/servers', component: Servers, exact: true},
    {path: '/process', component: Process, exact: true},
    {path: '/workWithUs', component: WorkWithUs, exact: true},
    {path: '/projects', component: Projects, exact: true}
]

export const IndividualPages = [
    {path: '/brandingIndividual', component: BrandingIndividual, exact: true},
    {path: '/marketingIndividual', component: MarketingIndividual, exact: true},
    {path: '/digitalMarketingIndividual', component: DigitalIndividual, exact: true},
    {path: '/webDesignIndividual', component: WebDesignIndividual, exact: true},
    {path: '/projects/hundredIndividual', component: Hundred, exact: true},
    {path: '/projects/artfoodIndividual', component: Artfood, exact: true},
    {path: '/projects/arterIndividual', component: Arter, exact: true},
    {path: '/projects/hlfIndividual', component: HLF, exact: true},


]