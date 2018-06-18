using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Lokacija
    {
        public String Xkoordinate { get; set; }
        public String Ykoordinate { get; set; }
        public Adresa Adr { get; set; }

        public Lokacija() { }
        public Lokacija(String x, String y, Adresa ad )
        {
            Xkoordinate = x;
            Ykoordinate = y;
            Adr = ad;
        }
    }
}