using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Komentar
    {
        public String Opis { get; set; }
        public DateTime Datum { get; set; }
        public String KorKomUsername { get; set; }

        public String VozKomUsername { get; set; }
        public int Ocena { get; set; }

        public Komentar()
        {
            Ocena = -1;
        }
    }
}