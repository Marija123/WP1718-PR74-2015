using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace WebAPI.Models.PomocniModeli
{
    public class PodaciOVozacu
    {
        public bool Zauzet { get; set; }
        public Enums.TipAutomobila TipA { get; set; }
        public Lokacija TrenutnaLokacija { get; set; }
    }
}