using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models.PomocniModeli
{
    public class VoznjaPomocnaZaIzmenu
    {
        public string XCoord { get; set; }
        public string YCoord { get; set; }
        public string Street { get; set; }
        public string tipAuta { get; set; }
        public string Datum { get; set; }
        public string korisnicko { get; set; }
    }
}