using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Enums
    {
        public enum TipAutomobila
        {
            putnicki, kombi
        }
        public enum UlogaKorisnika
        {
            Musterija, Dispecer, Vozac
        }
        public enum PolKorisnika
        {
            Musko, Zensko
        }
        public enum StatusVoznje
        {
            Kreirana_NaCekanju,
            Formirana,
            Obradjena,
            Prihvacena,
            Otkazana,
            Neuspesna,
            Uspesna
        }
    }
}