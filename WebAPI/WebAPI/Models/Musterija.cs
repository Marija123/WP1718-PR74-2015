﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Musterija : Korisnik
    {
       public bool Blokiran { get; set; }
       public Musterija ()
        {
            Uloga = Enums.UlogaKorisnika.Musterija;
            KorisnikVoznje = new List<Voznja>();
            Ime = "";
            Prezime = "";
            Blokiran = false;
        }
    }
}