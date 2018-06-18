using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using static WebAPI.Models.Enums;

namespace WebAPI.Models
{
    public abstract class Korisnik
    {
        public String KorisnickoIme { get; set; } //jedinstveno
        public String Lozinka { get; set; }
        public String Ime { get; set; }
        public String Prezime { get; set; }
        public PolKorisnika Pol { get; set; }
        public String JMBG { get; set; }
        public String KontaktTelefon { get; set; }
        public String Email { get; set; }
        public UlogaKorisnika Uloga { get; set; }

        //public List<Voznja> Voznje { get; set; }
    }
}