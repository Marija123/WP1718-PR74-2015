using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using static WebAPI.Models.Enums;

namespace WebAPI.Models
{
    public class Automobil
    {
       public String UsernameVozaca { get; set; }
        public int GodisteAutomobila { get; set; }
        public String BrojRegistarskeOzn { get; set; }
        public int BrojTaksiVozila { get; set; } //jedinstveno
        public TipAutomobila TA { get; set; }
       // public bool Zauzeto { get; set; }
    }
}