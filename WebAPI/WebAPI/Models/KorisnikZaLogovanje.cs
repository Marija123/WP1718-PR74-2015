using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class KorisnikZaLogovanje
    {
        public String KorisnickoIme { get; set; }
        public String Lozinka { get; set; }
        public bool LoggedIn { get; set; }
    }
}