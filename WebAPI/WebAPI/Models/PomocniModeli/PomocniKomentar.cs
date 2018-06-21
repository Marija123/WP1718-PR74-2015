using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models.PomocniModeli
{
    public class PomocniKomentar
    {
        public String KomOpis { get; set; }
        public String KomOcena { get; set; }
        public Voznja Voz { get; set; }
    }
}