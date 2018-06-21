using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using static WebAPI.Models.Enums;

namespace WebAPI.Models
{
    public class Voznja
    {
        public string DatumIVremePorudzbine { get; set; }
        public Lokacija LokacijaZaDolazak { get; set; }
        public TipAutomobila TipAuta { get; set; }

        public Musterija Mus { get; set; }
        public Lokacija Odrediste { get; set; }
        public Dispecer Disp { get; set; }
        public Vozac Voz { get; set; }
        public Double Iznos { get; set; }
        public StatusVoznje Stat { get; set; }
        public Komentar Kom { get; set; }

        public Voznja ()
        {
            Iznos = -1;
        }
           
    }
}