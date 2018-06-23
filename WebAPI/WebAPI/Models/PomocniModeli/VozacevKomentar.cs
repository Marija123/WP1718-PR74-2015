using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models.PomocniModeli
{
    public class VozacevKomentar
    {
        public String Kometar { get; set; }
        public Voznja Voz { get; set; }
    }
}