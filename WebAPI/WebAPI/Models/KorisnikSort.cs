using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class KorisnikSort
    {
        public string Username { get; set; }
        public string Uloga { get; set; }
        public string Status { get; set; }

        public List<Voznja> Drivess { get; set; }
        public int PoCemu { get; set; }
    }
}