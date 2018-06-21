using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models.PomocniModeli
{
    public class PretraziModel
    {
        public string Username { get; set; }
        public string Uloga { get; set; }
        public List<Voznja> Drivess { get; set; }
        public string DatumOd { get; set; }
        public string DatumDo { get; set; }
        public string OcenaOd { get; set; }
        public string OcenaDo { get; set; }
        public string CenaOd { get; set; }
        public string CenaDo { get; set; }
        public string VozIme { get; set; }
        public string VozPrezime { get; set; }
        public string MustIme { get; set; }
        public string MustPrezime { get; set; }
        


    }
}