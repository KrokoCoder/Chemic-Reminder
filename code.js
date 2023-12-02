document.querySelector("title");

function createTextarea(id, content) {
    var textarea = document.createElement("textarea");
    textarea.id = id;
    textarea.style.width = "250px";
    textarea.style.height = "250px";
    textarea.readOnly = true;
    textarea.value = content;
    textarea.style.border = "1px solid #000";
    textarea.style.backgroundColor = "yellow";
    textarea.style.position = "absolute";
    textarea.onclick = function () {
        removeTextArea(id);
    };
    document.body.appendChild(textarea);
}

function removeTextArea(id) {
    var textareaToRemove = document.getElementById(id);
    if (textareaToRemove) {
        textareaToRemove.remove();
    }
}

function Sm() {
    createTextarea("SmCan", "Samarium \n\n 62nd element in the periodic table \n\n Lanthanide \n\n atom Mass = 150.38 \n\n metal, \n\n Electron configuration  = (Xe)4f^6 6s^2");
}

function O() {
    createTextarea("OCan", "Oxygen \n\n 8th element in the periodic table \n\n reactive nonmetal\n\n atom Mass = 15.999 \n\n gaze \n\n Electron configuration  = (He)2s^2 2p^4");
}
function Ti(){
    createTextarea("TiCan", "Titanium \n\n 22nd element in the periodic table \n\n transition metal \n\n atom Mass = 47.867 \n\n metal \n\n Electron configuration  = (Ar)3d^2 4s^2");
}
function In(){
    createTextarea("InCan", "Indium \n\n 49th element in the periodic table \n\n post-transition metal \n\n atom Mass = 114.818 \n\n metal \n\n Electron configuration  = (Kr)4d^10 5s^2 5p^1");
}
function P(){
    createTextarea("PCan", "Phodphorus \n\n 15th element in the periodic table \n\n reactive nonmetal \n\n atom Mass = 30.974 \n\n gaze/nonmetal \n\n Electron configuration  = (Ne)3s^2 3p^6");
}
function Ca(){
    createTextarea("CaCan", "Calcium \n\n 20th element in the periodic table \n\n alkaline earth metal \n\n atom Mass = 40.078 \n\n metal \n\n Electron configuration  = (Ar)4s^2");
}
function U(){
    createTextarea("UCan", "Uranium \n\n 92nd element in the periodic table \n\n Actinide \n\n atom Mass = 238.029 \n\n Radioactive metal \n\n Electron configuration  = (Rn)5f^3 6d^1 7s^2");
}
function Ne(){
    createTextarea("NeCan", "Neon \n\n 10th element in the periodic table \n\n noble gas \n\n atom Mass = 20.179 \n\n Gas \n\n Electron configuration  = (He)2s^2 2p^6");
}
function Po(){
    createTextarea("PoCan", "Polonium \n\n 84th element in the periodic table \n\n semimetal \n\n atom Mass = 209 \n\n Radioactive metal \n\n Electron configuration  = (Xe)4f^14 5d^10 6s^2 6p^4");
}
function Tc(){
    createTextarea("TcCan", "Technetium \n\n 43rd element in the periodic table \n\n transition metal \n\n atom Mass = 98.906 \n\n metal \n\n Electron configuration  = (Kr)4d^5 5s^2 ");
}
function As(){
    createTextarea("AsCan", "Arsenic \n\n 33rd element in the periodic table \n\n semimetal \n\n atom Mass = 74.922 \n\n metal \n\n Electron configuration  = (Ar)4s^2 4p^3");
}
function Cm(){
    createTextarea("CmCan", "Curium \n\n 96th element in the periodic table \n\n Actinide \n\n atom Mass = 247 \n\n Radioactive metal \n\n Electron configuration  = (Rn)5f^7 6d^1 7s^2");
}
function Nd(){
    createTextarea("NdCan", "Neodymium \n\n 60th element in the periodic table \n\n Lanthanide \n\n atom Mass = 144.24 \n\n metal \n\n Electron configuration  = (Xe)4f^4 6s^2");
}
function B(){
    createTextarea("BCan", "Boron \n\n 5th element in the periodic table \n\n semimetal \n\n atom Mass = 10.811 \n\n semimetal \n\n Electron configuration  = (He)2s^2 2p^1");
}
function Tl(){
    createTextarea("TlCan", "Thallium \n\n 81st element in the periodic table \n\n post-transition metals \n\n atom Mass = 204.383 \n\n metal \n\n Electron configuration  = (Xe) 4f^14 5d^10 6s^2 6p^1");
}
function I(){
    createTextarea("ICan", "Iodine \n\n 53rd element in the periodic table \n\n halogen \n\n atom Mass = 126.904 \n\n liquid \n\n Electron configuration  = (Kr) 4d^10 5s^2 5p^5");
}
function Sn(){
    createTextarea("SnCan", "Tin \n\n 50th element in the periodic table \n\n post-transition metals \n\n atom Mass = 118.71 \n\n metal \n\n Electron configuration  = (Kr) 4d^10 5s^2 5p^2");
}
function N(){
    createTextarea("NCan", "Nitrogen \n\n 7th element in the periodic table \n\n reactive nonmetal \n\n atom Mass = 14.007 \n\n gaze \n\n Electron configuration  = (He)2s^2 2p^3");
}
function Ta(){
    createTextarea("TaCan", "Tantalum \n\n 73rd element in the periodic table \n\n transition metal \n\n atom Mass = 180.948 \n\n metal \n\n Electron configuration  = (Xe)4f^14 5d^3 6s^2");
}
function Ru(){
    createTextarea("RuCan", "Ruthenium \n\n 44th element in the periodic table \n\n transition metal \n\n atom Mass = 101.07 \n\n metal \n\n Electron configuration  = (Kr)4d^7 5s^1");
}
function V(){
    createTextarea("VCan", "Vanadium \n\n 23rd element in the periodic table \n\n transition metal \n\n atom Mass = 50.942 \n\n metal \n\n Electron configuration  = (Ar)3d^3 4s^2");
}
function Ac(){
    createTextarea("AcCan", "Actinium \n\n 89th element in the periodic table \n\n actinide \n\n atom Mass = 227 \n\n Radioactive metal \n\n Electron configuration  = (Rn)6d^1 7s^2");
}
function Na(){
    createTextarea("NaCan", "Sodium \n\n 11th element in the periodic table \n\n alkali metal \n\n atom Mass = 22.99 \n\n metal \n\n Electron configuration  = (Ne)3s^1");
}
function Sc(){
    createTextarea("ScCan", "Scandium \n\n 21st element in the periodic table \n\n transition metal \n\n atom Mass = 44.956 \n\n metal \n\n Electron configuration  = (Ar)3s^2, 3p^1");
}
function Ag(){
    createTextarea("AgCan", "Silver \n\n 47th element in the periodic table \n\n transition metal \n\n atom Mass = 107.868 \n\n metal \n\n Electron configuration  = (Kr)4d^10 5s^2 5p^4");
}
function Gd(){
    createTextarea("GdCan", "Gadolinium \n\n 64th element in the periodic table \n\n Lanthanide \n\n atom Mass = 157.25 \n\n metal \n\n Electron configuration  = (Xe) 4f^7 5d^1 6s^2");
}
function Ni(){
    createTextarea("NiCan", "Nickel \n\n 28th element in the periodic table \n\n transition metal \n\n atom Mass = 58.693 \n\n metal \n\n Electron configuration  = (Ar) 4s^2 3d^8");
}
function Cs(){
    createTextarea("CsCan", "Cesium \n\n 55th element in the periodic table \n\n alkali metal \n\n atom Mass = 132.905 \n\n metal \n\n Electron configuration  = (Xe) 6s^1");
}
function Ba(){
    createTextarea("BaCan", "Barium \n\n 56th element in the periodic table \n\n alkaline earth metal \n\n atom Mass = 137.327 \n\n metal \n\n Electron configuration  = (Xe) 6s^2");
}
function Mn(){
    createTextarea("MnCan", "Manganese \n\n 25th element in the periodic table \n\n transition metal \n\n atom Mass = 54.938 \n\n metal \n\n Electron configuration  = (Ar) 4s^2 3d^5");
}
function Lv(){
    createTextarea("LvCan", "Livermorium \n\n 114th element in the periodic table \n\n Unknown post-transition metal \n\n atom Mass = 293 \n\n Radioactive metal \n\n Electron configuration  = ???");
}
function Ge(){
    createTextarea("GeCan", "Germanium \n\n 32nd element in the periodic table \n\n semimetal \n\n atom Mass = 72.61 \n\n semimetal \n\n Electron configuration  = (Ar) 4s^2 3d^10 4p^2");
}
function Te(){
    createTextarea("TeCan", "Tellurium \n\n 52nd element in the periodic table \n\n semimetal \n\n atom Mass = 127.6 \n\n semimetal \n\n Electron configuration  = (Kr) 4d^10 5s^2 5p^4");
}
function Ho(){
    createTextarea("HoCan", "Holmium \n\n 67th element in the periodic table \n\n Lanthanide \n\n atom Mass = 164.930 \n\n metal \n\n Electron configuration  = (Xe) 4f^11 6s^2");
}
function Fe(){
    createTextarea("FeCan", "Iron \n\n 26th element in the periodic table \n\n transition metal \n\n atom Mass = 55.845 \n\n metal \n\n Electron configuration  = (Ar) 4s^2 3d^6");
}
function He(){
    createTextarea("HeCan", "Helium \n\n 2nd element in the periodic table \n\n noble gas \n\n atom Mass = 4.0026 \n\n noble gas \n\n Electron configuration  = 1s^2");
}
function K(){
    createTextarea("KCan", "Potassium \n\n 19th element in the periodic table \n\n alkali metal \n\n atom Mass = 39.098 \n\n metal \n\n Electron configuration  = (Ar) 4s^1");
}
function Pt(){
    createTextarea("PtCan", "Platinum \n\n 78th element in the periodic table \n\n transition metal \n\n atom Mass = 195.084 \n\n metal \n\n Electron configuration  = (Xe) 4f^14 5d^9 6s^1");
}
function Co(){
    createTextarea("CoCan", "Cobalt \n\n 27th element in the periodic table \n\n transition metal \n\n atom Mass = 58.933 \n\n metal \n\n Electron configuration  = (Ar) 4s^2 3d^7");
}
function F(){
    createTextarea("FCan", "Fluorine \n\n 9th element in the periodic table \n\n Halogen \n\n atom Mass = 18.998 \n\n Halogen \n\n Electron configuration  = (He) 2s^2 2p^5");
}
function Rh(){
    createTextarea("RhCan", "Rhodium \n\n 45th element in the periodic table \n\n transition metal \n\n atom Mass = 102.91 \n\n metal \n\n Electron configuration  = (Kr) 4d^8 5s^1");
}
function Fr(){
    createTextarea("FrCan", "Francium \n\n 87th element in the periodic table \n\n Unknown post-transition metal \n\n atom Mass = 223 \n\n Radioactive metal \n\n Electron configuration  = (Rn) 7s^1");
}
function W(){
    createTextarea("WCan", "Tungsten \n\n 74th element in the periodic table \n\n transition metal \n\n atom Mass = 183.84 \n\n metal \n\n Electron configuration  = (Xe) 4f^14 5d^4 6s^2");
}
function Nb(){
    createTextarea("NbCan", "Niobium \n\n 41st element in the periodic table \n\n transition metal \n\n atom Mass = 92.906 \n\n metal \n\n Electron configuration  = (Kr) 4d^6 5s^1 5p^4");
}
function Cu(){
    createTextarea("CuCan", "Copper \n\n 29th element in the periodic table \n\n transition metal \n\n atom Mass = 63.546 \n\n metal \n\n Electron configuration  = (Ar) 4s^1 3d^10");
}
function H(){
    createTextarea("HCan", "Hydrogen \n\n 1st element in the periodic table \n\n reactive nonmetal \n\n atom Mass = 1.008 \n\n Gas \n\n Electron configuration  = 1s^1");
}
function Cl(){
    createTextarea("ClCan", "Chlorine \n\n 17th element in the periodic table \n\n Halogen \n\n atom Mass = 35.453 \n\n Halogen \n\n Electron configuration  = (Ne) 3s^2 3p^5");
}
function Rg(){
    createTextarea("RgCan", "Roentgentium \n\n 111th element in the periodic table \n\n unknown transition metal \n\n atom Mass = 280 \n\n unknown Radioactive metal \n\n Electron configuration  = ???");
}
function Sr(){
    createTextarea("SrCan", "Strontium \n\n 38th element in the periodic table \n\n alkaline earth metal \n\n atom Mass = 87.62 \n\n metal \n\n Electron configuration  = (Kr) 5s^2");
}
function Pm(){
    createTextarea("PmCan", "Promethium \n\n 61st element in the periodic table \n\n Lanthanide \n\n atom Mass = 145 \n\n metal \n\n Electron configuration  = (Xe) 4f^5 6s^2")
}
function Am(){
    createTextarea("AmCan", "Americium \n\n 95th element in the periodic table \n\n Actinide \n\n atom Mass = 243 \n\n Radioactive metal \n\n Electron configuration  = (Rn) 5f^7 7s^2")
}
function Al(){
    createTextarea("AlCan", "Aluminum \n\n 13th element in the periodic table \n\n post-transition metal \n\n atom Mass = 26.982 \n\n metal \n\n Electron configuration  = (Ne) 3s^2 3p^1")
}
function Hg(){
    createTextarea("HgCan", "Mercury \n\n 80th element in the periodic table \n\n transition metal \n\n atom Mass = 200.59 \n\n metal \n\n Electron configuration  = (Xe) 4f^14 5d^10 6s^2")
}
function Li(){
    createTextarea("LiCan", "Litium \n\n 3rd element in the periodic table \n\n alkali metal \n\n atom Mass = 6.941 \n\n metal \n\n Electron configuration  = 2s^1")
}
function Sb(){
    createTextarea("SbCan", "Antimony \n\n 51st element in the periodic table \n\n semimetal \n\n atom Mass = 121.76 \n\n semimetal \n\n Electron configuration  = (Kr) 4d^10 5s^2 5p^3")
}
function Mg(){
    createTextarea("MgCan", "Magnesium \n\n 12th element in the periodic table \n\n alkaline earth metal \n\n atom Mass = 24.305 \n\n metal \n\n Electron configuration  = (Ne) 3s^2")
}
function Bi(){
    createTextarea("BiCan", "Bismuth \n\n 83rd element in the periodic table \n\n post-transition metal \n\n atom Mass = 208.98 \n\n metal \n\n Electron configuration  = (Xe) 4f^14 5d^10 6s^2 6p^3")
}
function Au(){
    createTextarea("AuCan", "Gold \n\n 79th element in the periodic table \n\n transition metal \n\n atom Mass = 196.966 \n\n metal \n\n Electron configuration  = (Xe) 4f^14 5d^10 6s^1")
}
function Ds(){
    createTextarea("DsCan", "Darmstadtium \n\n 110th element in the periodic table \n\n unknown transition metal \n\n atom Mass = 281 \n\n unknown Radioactive metal \n\n Electron configuration  = ???")
}
function Xe(){
    createTextarea("XeCan", "Xenon \n\n 54th element in the periodic table \n\n noble gas \n\n atom Mass = 131.29 \n\n noble gas \n\n Electron configuration  = (Kr) 4d^10 5s^2 5p^6")
}
function Rb(){
    createTextarea("RbCan", "Rubidium \n\n 37th element in the periodic table \n\n alkaline earth metal \n\n atom Mass = 85.47 \n\n metal \n\n Electron configuration  = (Kr) 4s^1")
}
function Mt(){
    createTextarea("MtCan", "Meitnerium \n\n 109th element in the periodic table \n\n unknown transition metal \n\n atom Mass = 278 \n\n unknown Radioactive metal \n\n Electron configuration  = ???")
}
function Eu(){
    createTextarea("EuCan", "Europium \n\n 63rd element in the periodic table \n\n Lanthanide \n\n atom Mass = 151.964 \n\n metal \n\n Electron configuration  = (Xe) 4f^7 6s^2")
}
function Bk(){
    createTextarea("BkCan", "Berkelium \n\n 97th element in the periodic table \n\n Actinide \n\n atom Mass = 247 \n\n Radioactive metal \n\n Electron configuration  = (Rn) 5f^9 7s^2")
}
function Pd(){
    createTextarea("PdCan", "Palladium \n\n 46th element in the periodic table \n\n transition metal \n\n atom Mass = 106.42 \n\n metal \n\n Electron configuration  = (Xe) 4d^10")
}
function Mc(){
    createTextarea("McCan", "Moscowium \n\n 115th element in the periodic table \n\n unknown post-transition metal \n\n atom Mass = 277 \n\n unknown Radioactive metal \n\n Electron configuration  = ???")
}
function Se(){
    createTextarea("SeCan", "Selenium \n\n 34th element in the periodic table \n\n reactive nonmetal \n\n atom Mass = 78.96 \n\n nonmetal \n\n Electron configuration  = (Ar) 4s^2 3d^10 4p^4")
}
function Dy(){
    createTextarea("DyCan", "Dysprosium \n\n 66th element in the periodic table \n\n Lanthanide \n\n atom Mass = 162.5 \n\n metal \n\n Electron configuration  = (Xe) 4f^10 6s^2")
}
function At(){
    createTextarea("AtCan", "Astate \n\n 85th element in the periodic table \n\n halogen \n\n atom Mass = 210 \n\n Radioactive halogen \n\n Electron configuration  = (Xe) 4f^14 5d^10 6s^2 6p^5")
}
function Zn(){
    createTextarea("ZnCan", "Zinc \n\n 30th element in the periodic table \n\n transition metal \n\n atom Mass = 65.38 \n\n metal \n\n Electron configuration  = (Ar) 4s^2 3d^10")
}
function Fm(){
    createElement("FmCan", "Fermium \n\n 100th element in the periodic table \n\n Actinides \n\n atom Mass = 257 \n\n Radioactive metal \n\n Electron configuration  = 5f^12 7s^2")
}
function Cr(){
    createTextarea("CrCan", "Chromium \n\n 24th element in the periodic table \n\n transition metal \n\n atom Mass = 51.996 \n\n metal \n\n Electron configuration  = (Ar) 4s^1 3d^5")
}
function Rn(){
    createTextarea("RnCan", "Radon \n\n 86th element in the periodic table \n\n noble gas \n\n atom Mass = 222 \n\n noble radioactive gas \n\n Electron configuration  = (Xe) 4f^14 5d^10 6s^2 6p^6")
}
function C(){
    createTextarea("CCan", "Carbon \n\n 6th element in the periodic table \n\n reactive nonmetal \n\n atom Mass = 12.011 \n\n gas \n\n Electron configuration  = (He) 2s^2 2p^2")
}
function Hs(){
    createTextarea("HsCan", "Hassium \n\n 108th element in the periodic table \n\n transition metal \n\n atom Mass = 269 \n\n metal \n\n Electron configuration  = (Rn) 5f^14 6d^6 7s^2")
}
function Si(){
    createTextarea("SiCan", "Silicium \n\n 14th element in the periodic table \n\n semimetal \n\n atom Mass = 28.086 \n\n metal \n\n Electron configuration  = (Ne) 3s^2 3p^2")
}
function Rf(){
    createTextarea("RfCan", "Rutherfordium \n\n 104th element in the periodic table \n\n transition metal \n\n atom Mass = 261 \n\n metal \n\n Electron configuration  = 5f^14 6d^2 7s^2");
}
function Th(){
    createTextarea("ThCan", "Thorium \n\n 90th element in the periodic table \n\n Actinides \n\n atom Mass = 232.038 \n\n Radioactive metal \n\n Electron configuration  = (Rn) 6d^2 7s^2");
}
function Be(){
    createTextarea("BeCan", "Beryllium \n\n 4th element in the periodic table \n\n alkaline earth metal \n\n atom Mass = 9.012 \n\n metal \n\n Electron configuration  = (He) 2s^2");
}
function Db(){
    createTextarea("DbCan", "Dubnium \n\n 105th element in the periodic table \n\n transition metal \n\n atom Mass = 262 \n\n Radioactive metal \n\n Electron configuration  = (Rn) 5f^14 6d^3 7s^2");
}
function Bh(){
    createTextarea("BhCan", "Bohrium \n\n 107th element in the periodic table \n\n transition metal \n\n atom Mass = 264 \n\n metal \n\n Electron configuration  = (Rn) 5f^14 6d^5 7s^2");
}
function Re(){
    createTextarea("ReCan", "Rhenium \n\n 75th element in the periodic table \n\n transition metal \n\n atom Mass = 186.207 \n\n metal \n\n Electron configuration  = (Xe) 4f^14 5d^5 6s^2");
}
function Ts(){
    createTextarea("TsCan", "Tennessine \n\n 117th element in the periodic table \n\n unknown halogen \n\n atom Mass = 294 \n\n unknown radioactive halogen \n\n Electron configuration  = ???");
}
function Cn(){
    createTextarea("CnCan", "Copernium \n\n 112th element in the periodic table \n\n unknown transition metal \n\n atom Mass = 285 \n\n unknown radioactive metal \n\n Electron configuration  = ???");
}
function Cd(){
    createTextarea("CdCan", "Cadmium \n\n 48th element in the periodic table \n\n transition metals \n\n atom Mass = 112.411 \n\n metal \n\n Electron configuration  = (Xe) 4d^10 5s^2");
}
function Tm(){
    createTextarea("TmCan", "Thulium \n\n 69th element in the periodic table \n\n Lanthanide \n\n atom Mass = 168.934 \n\n metal \n\n Electron configuration  = (Xe) 4f^12 6s^2");
}
function Kr(){
    createTextarea("KrCan", "Krypton \n\n 36th element in the periodic table \n\n noble gas \n\n atom Mass = 83.798 \n\n noble gas \n\n Electron configuration  = (Ar) 4s^2 3d^10 4p^6");
}
function Os(){
    createTextarea("OsCan", "Osmium \n\n 76th element in the periodic table \n\n transition metal \n\n atom Mass = 190.23 \n\n metal \n\n Electron configuration  = (Xe) 4f^14 5d^6 6s^2");
}
function Ra(){
    createTextarea("RaCan", "Radium \n\n 88th element of the periodic table \n\n transition metal \n\n atom Mass = 226 \n\n metal \n\n Electron configuration  = (Xe) 76s^2");
}
function Ga(){
    createTextarea("GaCan", "Gallium \n\n 31th element in the periodic table \n\n post-transition metal \n\n atom Mass = 69.723 \n\n metal \n\n Electron configuration  = (Ar) 3d^10 4s^2 4p^1");
}
function S(){
    createTextarea("SCan", "Sulfur \n\n 16th element in the periodic table \n\n reactive non-metal \n\n atom Mass = 32.06 \n\n non-metal \n\n Electron configuration  = (Ne) 3s^2 3p^4");
}
function Pb(){
    createTextarea("PbCan", "Plumbium \n\n 82nd element in the periodic table \n\n post-transition metal \n\n atom Mass = 207.2 \n\n metal \n\n Electron configuration  = (Xe) 4f^14 5d^10 6s^2 6p^2");
}
function Ir(){
    createTextarea("IrCan", "Iridium \n\n 77th element in the periodic table \n\n transition metal \n\n atom Mass = 192.217 \n\n metal \n\n Electron configuration  = (Xe) 4f^14 5d^7 6s^2");
}
function Np(){
    createTextarea("NpCan", "Neptunium \n\n 93rd element in the periodic table \n\n Actinide \n\n atom Mass = 237 \n\n Radioactive metal \n\n Electron configuration  = (Rn) 5f^4 6d^1 7s^2");
}
function Br(){
    createTextarea("BrCan","Bromine \n\n 35th element in the periodic table \n\n halogen \n\n atom Mass = 79.904 \n\n non-metal \n\n Electron configuration  = (Ar) 3d^10 4s^2 4p^5");
}
function Md(){
    createTextarea("MdCan", "Mendelevium \n\n 101st element in the periodic table \n\n Actinide \n\n atom Mass = 258 \n\n Radioactive metal \n\n Electron configuration  = (Rn) 5f^13 7s^2");
}
function Hf(){
    createTextarea("HfCan", "Hafnium \n\n 72nd element in the periodic table \n\n transition metal \n\n atom Mass = 178.49 \n\n metal \n\n Electron configuration  = (Xe) 4f^14 5d^8 6s^2");
}
function Ar(){
    createTextarea("ArCan", "Argon \n\n 18th element in the periodic table \n\n noble gas \n\n atom Mass = 39.948 \n\n noble gas \n\n Electron configuration  = (Ne) 3s^2 3p^6");
}
function Y(){
    createTextarea("YCan", "Yttrium \n\n 39th element in the periodic table \n\n transition metal \n\n atom Mass = 88.906 \n\n metal \n\n Electron configuration  = (Kr) 5s^2 4d^1");
}
function Zr(){
    createTextarea("ZrCan", "Zirconium \n\n 40th element in the periodic table \n\n transition metal \n\n atom Mass = 91.224 \n\n metal \n\n Electron configuration  = (Kr) 5s^2 4d^2");
}
function Mo(){
    createTextarea("MoCan", "Molybdenum \n\n 42nd element in the periodic table \n\n transition metal \n\n atom Mass = 95.96 \n\n metal \n\n Electron configuration  = (Kr) 5s^2 4d^4");
}
function La(){
    createTextarea("LaCan", "Lanthanum \n\n 57th element in the periodic table \n\n lanthanide \n\n atom Mass = 138.905 \n\n metal \n\n Electron configuration  = (Xe)5d^1 6s^2");
}
function Ce(){
    createTextarea("CeCan", "Cerium \n\n 58th element in the periodic table \n\n lanthanide \n\n atom Mass = 140.116 \n\n metal \n\n Electron configuration  = (Xe)5d^2 6s^2");
}
function Pr(){
    createTextarea("PrCan", "Praseodymium \n\n 59th element in the periodic table \n\n lanthanide \n\n atom Mass = 140.907 \n\n metal \n\n Electron configuration  = (Xe)5d^3 6s^2");
}
function Tb(){
    createTextarea("TbCan", "Terbium \n\n 65th element in the periodic table \n\n lanthanide \n\n atom Mass = 158.925 \n\n metal \n\n Electron configuration  = (Xe)5d^8 6s^2");
}
function Er(){
    createTextarea("ErCan", "Erbium \n\n 68th element in the periodic table \n\n lanthanide \n\n atom Mass = 167.259 \n\n metal \n\n Electron configuration  = (Xe)5d^11 6s^2");
}
function Yb(){
    createTextarea("YbCan", "Ytterbium \n\n 70th element in the periodic table \n\n lanthanide \n\n atom Mass = 173.04 \n\n metal \n\n Electron configuration  = (Xe)5d^13 6s^2");
}
function Lu(){
    createTextarea("LuCan", "Lutetium \n\n 71st element in the periodic table \n\n lanthanide \n\n atom Mass = 174.967 \n\n metal \n\n Electron configuration  = (Xe)5d^14 6s^2");
}
function Pa(){
    createTextarea("PaCan", "Protactinium \n\n 91st element in the periodic table \n\n actinide \n\n atom Mass = 231.036 \n\n Radioactive metal \n\n Electron configuration  = (Rn) 5f^2 6d^1 7s^2"); 
}
function Pu(){
    createTextarea("PuCan", "Plutonium \n\n 94th element in the periodic table \n\n actinide \n\n atom Mass = 244 \n\n Radioactive metal \n\n Electron configuration  = (Rn) 5f^5 6d^1 7s^2");
}
function Cf(){
    createTextarea("CfCan", "Californium \n\n 97th element in the periodic table \n\n actinide \n\n atom Mass = 251 \n\n Radioactive metal \n\n Electron configuration  = (Rn) 5f^9 6d^1 7s^2");
}
function Es(){
    createTextarea("EsCan", "Einsteinium \n\n 99th element in the periodic table \n\n actinide \n\n atom Mass = 252 \n\n Radioactive metal \n\n Electron configuration  = (Rn) 5f^10 6d^1 7s^2");
}
function No(){
    createTextarea("NoCan", "Nobelium \n\n 102nd element in the periodic table \n\n actinide \n\n atom Mass = 259 \n\n Radioactive metal \n\n Electron configuration  = (Rn) 5f^13 6d^1 7s^2");
}
function Lr(){
    createTextarea("LrCan", "Lawrencium \n\n 103rd element in the periodic table \n\n actinide \n\n atom Mass = 266 \n\n Radioactive metal \n\n Electron configuration  = (Rn) 5f^14 6d^1 7s^2");
}
function Sg(){
    createTextarea("SgCan", "Seaborgium \n\n 106th element in the periodic table \n\n transition metal \n\n atom Mass = 267 \n\n Radioactive metal \n\n Electron configuration  = (Rn) 5f^14 6d^4 7s^2");
}
function Nh(){
    createTextarea("NhCan", "Nihonium \n\n 113th element in the periodic table \n\n unknown post-transition metal \n\n atom Mass = 286 \n\n unknown Radioactive metal \n\n Electron configuration  = ???");
}
function Fl(){
    createTextarea("FlCan", "Flerovium \n\n 114th element in the periodic table \n\n unknown post-transition metal \n\n atom Mass = 289 \n\n unknown Radioactive metal \n\n Electron configuration  = ???");
}
function Og(){
    createTextarea("OgCan", "Oganesson \n\n 118th element in the periodic table \n\n unknown nobel gas \n\n atom Mass = 294 \n\n unknown Radioactive nobel gas \n\n Electron configuration  = ???");
}
document.addEventListener("dblclick", function() {
    removeTextArea("OCan");
});

