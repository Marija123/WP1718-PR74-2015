using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Vozac : Korisnik
    {
        public Lokacija Lok { get; set; }
        public Automobil Auto { get; set; }
        public bool Zauzet { get; set; }
        public bool Blokiran { get; set; }
        public Vozac()
        {
            Uloga = Enums.UlogaKorisnika.Vozac;
            KorisnikVoznje = new List<Voznja>();
            Ime = "";
            Prezime = "";
            Blokiran = false;
        }
    }
}