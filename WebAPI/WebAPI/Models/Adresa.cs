using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Adresa
    {
        public String Ulica { get; set; }
        public String Broj { get; set; }
        public String NaseljenoMesto { get; set; }
        public Double PozivniBroj { get; set; }

        public Adresa() { }
        public Adresa(String u, String b, String nm, Double pb)
        {
            Ulica = u;
            Broj = b;
            NaseljenoMesto = nm;
            PozivniBroj = pb;
        }
    }
}