using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class VoznjaPomocna
    {
        public string XCoord { get; set; }
        public string YCoord { get; set; }
        public string Street { get; set; }
        public string tipAuta { get; set; }
        public string korisnicko { get; set; }
    }

    public class KonacnaVoznja
    {
        public VoznjaPomocna voznja { get; set; }
        public String korisnickoImeAdmin { get; set; }
        public String korisnickoImeVozac { get; set; }
    }

    public class KonacnaVoznjaDisp
    {
        public Voznja voznja { get; set; }
        public String korisnickoImeAdmin { get; set; }
        public String korisnickoImeVozac { get; set; }
    }
}