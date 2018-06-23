using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models.PomocniModeli
{
    public class ModelZaObradiVoznju
    {
        public string Username { get; set; }
        public Voznja Voznj { get; set; }
        public List<Voznja> ListaVoznji { get; set; }

        
    }
}