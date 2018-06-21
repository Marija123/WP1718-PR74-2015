
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.DataIO;

using WebAPI.Models;
using WebAPI.Models.PomocniModeli;

namespace WebAPI.Controllers
{
    public class ProfController : ApiController
    {
        public static XMLDataIO xml = new XMLDataIO();

        [HttpGet]
        [ActionName("GetUserByUsername")]
        public Korisnik GetUserByUsername(string username)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Musterije.xml");
            string ss1 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Vozaci.xml");
            string ss2 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Dispeceri.xml");
            List<Musterija> users = xml.ReadUsers(ss);
            List<Vozac> vozaci = xml.ReadDrivers(ss1);
            List<Dispecer> dispeceri = xml.ReadDispecer(ss2);

            foreach (Musterija us in users)
            {
                if (us.KorisnickoIme == username)
                {
                    Musterija kor = new Musterija();
                    kor.KorisnickoIme = us.KorisnickoIme;
                    kor.Ime = us.Ime;
                    kor.Prezime = us.Prezime;
                    kor.Uloga = us.Uloga;
                    kor.Email = us.Email;
                    kor.KontaktTelefon = us.KontaktTelefon;
                    kor.Pol = us.Pol;
                    kor.Lozinka = null;
                    kor.JMBG = us.JMBG;


                    return kor;
                }
            }
            foreach (Dispecer us in dispeceri)
            {
                if (us.KorisnickoIme == username)
                {
                    Dispecer kor = new Dispecer();
                    kor.KorisnickoIme = us.KorisnickoIme;
                    kor.Ime = us.Ime;
                    kor.Prezime = us.Prezime;
                    kor.Uloga = us.Uloga;
                    kor.Email = us.Email;
                    kor.KontaktTelefon = us.KontaktTelefon;
                    kor.Pol = us.Pol;
                    kor.Lozinka = null;
                    kor.JMBG = us.JMBG;


                    return kor;
                }
            }
            foreach (Vozac us in vozaci)
            {
                if (us.KorisnickoIme == username)
                {
                    Vozac kor = new Vozac();
                    kor.KorisnickoIme = us.KorisnickoIme;
                    kor.Ime = us.Ime;
                    kor.Prezime = us.Prezime;
                    kor.Uloga = us.Uloga;
                    kor.Email = us.Email;
                    kor.KontaktTelefon = us.KontaktTelefon;
                    kor.Pol = us.Pol;
                    kor.Lozinka = null;
                    kor.JMBG = us.JMBG;


                    return kor;
                }
            }

            return null;
        }

        [HttpPost]
        [ActionName("AddDriveCustomer")]
        public bool AddDriveCustomer([FromBody]VoznjaPomocna k)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Musterije.xml");
            string ss1 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");

            List<Musterija> users = xml.ReadUsers(ss);
            List<Voznja> drives = xml.ReadDrives(ss1);
            // bool g = true;
            Korisnik c = new Musterija();
            Voznja drive = new Voznja();
            foreach (Korisnik u in users)
            {
                if (u.KorisnickoIme == k.korisnicko)
                {
                    c = u;
                    Adresa a = new Adresa(k.Street, k.Number, k.Town, Int32.Parse(k.PostalCode));
                    Lokacija l = new Lokacija(k.XCoord, k.YCoord, a);
                    drive.Mus = (Musterija)c;
                    drive.LokacijaZaDolazak = l;
                    if (k.tipAuta != "")
                    {
                        drive.TipAuta = (Enums.TipAutomobila)int.Parse(k.tipAuta);
                    }
                    drive.Iznos = 0;
                    drive.Kom = new Komentar();

                    drive.DatumIVremePorudzbine = String.Format("{0:F}", DateTime.Now);
                    drive.Odrediste = new Lokacija();
                    drive.Disp = new Dispecer();
                    drive.Voz = new Vozac();
                    drive.Stat = Enums.StatusVoznje.Kreirana_NaCekanju;
                    // u.Drives.Add(drive);

                    //  g = false;
                }
            }

            drives.Add(drive);
            xml.WriteUsers(users, ss);
            xml.WriteDrives(drives, ss1);

            return true;


        }

        [HttpPost]
        [ActionName("AddDriveDispecer")]
        public bool AddDriveDispecer([FromBody]VoznjaPomocna k)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Dispeceri.xml");
            string ss1 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");
            string ss2 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Vozaci.xml");
            List<Dispecer> users = xml.ReadDispecer(ss);
            List<Voznja> drives = xml.ReadDrives(ss1);
            List<Vozac> vozaci = xml.ReadDrivers(ss2);
            // bool g = true;
            Korisnik c = new Dispecer();
            Voznja drive = new Voznja();
            foreach (Dispecer u in users)
            {
                if (u.KorisnickoIme == k.korisnicko)
                {
                    c = u;
                    Adresa a = new Adresa(k.Street, k.Number, k.Town, Int32.Parse(k.PostalCode));
                    Lokacija l = new Lokacija(k.XCoord, k.YCoord, a);
                    drive.Mus = new Musterija();
                    drive.LokacijaZaDolazak = l;
                    if (k.tipAuta != "")
                    {
                        drive.TipAuta = (Enums.TipAutomobila)int.Parse(k.tipAuta);
                    }
                    drive.Iznos = 0;
                    drive.Kom = new Komentar();
                    drive.DatumIVremePorudzbine = String.Format("{0:F}", DateTime.Now); ;
                    drive.Odrediste = new Lokacija();
                    drive.Disp = (Dispecer)c;

                    drive.Stat = Enums.StatusVoznje.Formirana;

                }
            }
            bool imaSlobodan = false;
            foreach (Vozac v in vozaci)
            {
                if (!v.Zauzet && v.Auto.TA == (Enums.TipAutomobila)int.Parse(k.tipAuta))
                {
                    v.Zauzet = true;
                    drive.Voz = v;
                    imaSlobodan = true;
                    break;
                }

            }

            if (!imaSlobodan)
            {
                drive.Voz = new Vozac();
                drive.Stat = Enums.StatusVoznje.Kreirana_NaCekanju;
            }

            drives.Add(drive);
            xml.WriteDispecer(users, ss);
            xml.WriteDrivers(vozaci, ss2);
            xml.WriteDrives(drives, ss1);

            return true;


        }

        [HttpGet]
        [ActionName("GetDrives")]
        public List<Voznja> GetDrives(string username)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");

            List<Voznja> listaDrives = xml.ReadDrives(ss);
            List<Voznja> listaDrives1 = new List<Voznja>();
            foreach (Voznja d in listaDrives)
            {
                if (d.Mus.KorisnickoIme == username || d.Disp.KorisnickoIme == username || d.Voz.KorisnickoIme == username)
                {
                    listaDrives1.Add(d);
                }
            }
            return listaDrives1;
        }

        [HttpGet]
        [ActionName("GetAllDrives")]
        public List<Voznja> GetAllDrives(string username)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");

            List<Voznja> listaDrives = xml.ReadDrives(ss);

            return listaDrives;
        }

        [HttpGet]
        [ActionName("GetWaitingDrives")]
        public List<Voznja> GetWaitingDrives(string username)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");

            List<Voznja> listaDrives = xml.ReadDrives(ss);
            List<Voznja> listaDrives1 = new List<Voznja>();
            foreach (Voznja d in listaDrives)
            {
                if (d.Stat == Enums.StatusVoznje.Kreirana_NaCekanju)
                {
                    listaDrives1.Add(d);
                }
            }
            return listaDrives1;
        }



        [HttpPost]
        [ActionName("Pretraga")]
        public List<Voznja> Pretraga([FromBody]PretraziModel k)
        {
            //string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");
            if (k.Drivess == null)
            {
                return new List<Voznja>();
            }
            //List<Voznja> listaDrives = xml.ReadDrives(ss);
            List<Voznja> listaDrives = k.Drivess;
            List<Voznja> listaDrives1 = k.Drivess;

            if (k.DatumOd != null)
            {
                listaDrives1 = listaDrives1.Where(o => DateTime.Parse(o.DatumIVremePorudzbine) >= DateTime.Parse(k.DatumOd)).ToList();

            }
            if (k.DatumDo != null)
            {
                listaDrives1 = listaDrives1.Where(o => DateTime.Parse(o.DatumIVremePorudzbine) <= DateTime.Parse(k.DatumDo)).ToList();
            }
            if (k.CenaOd != null)
            {
                listaDrives1 = listaDrives1.Where(o => o.Iznos >= Double.Parse(k.CenaOd)).ToList();
            }
            if (k.CenaDo != null)
            {
                listaDrives1 = listaDrives1.Where(o => o.Iznos <= Double.Parse(k.CenaDo)).ToList();
            }
            if (k.OcenaOd != null)
            {
                listaDrives1 = listaDrives1.Where(o => o.Kom.Ocena >= Double.Parse(k.OcenaOd)).ToList();
            }
            if (k.OcenaDo != null)
            {
                listaDrives1 = listaDrives1.Where(o => o.Kom.Ocena <= Double.Parse(k.OcenaDo)).ToList();
            }

            if ((Enums.UlogaKorisnika)int.Parse(k.Uloga) == Enums.UlogaKorisnika.Dispecer)
            {
                if (k.MustIme != null)
                {
                    listaDrives1 = listaDrives1.Where(o => o.Mus.Ime.Contains(k.MustIme)).ToList();
                }
                if (k.MustPrezime != null)
                {
                    listaDrives1 = listaDrives1.Where(o => o.Mus.Prezime.Contains(k.MustPrezime)).ToList();
                }
                if (k.VozIme != null)
                {
                    listaDrives1 = listaDrives1.Where(o => o.Voz.Ime.Contains(k.VozIme)).ToList();
                }
                if (k.VozPrezime != null)
                {
                    listaDrives1 = listaDrives1.Where(o => o.Voz.Prezime.Contains(k.VozPrezime)).ToList();
                }

            }



            return listaDrives1;
        }


        [HttpPost]
        [ActionName("Edit")]
        public bool Edit([FromBody]KorisnikPomocna k)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Musterije.xml");
            string ss1 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Vozaci.xml");
            string ss2 = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Dispeceri.xml");
            List<Musterija> users = xml.ReadUsers(ss);
            List<Vozac> vozaci = xml.ReadDrivers(ss1);
            List<Dispecer> disp = xml.ReadDispecer(ss2);
            bool g = true;
            bool imaGaUMus = false;
            foreach (Musterija u in users)
            {
                if (u.KorisnickoIme == k.Username)
                {
                    imaGaUMus = true;
                }
            }
            foreach (Vozac u in vozaci)
            {
                if (u.KorisnickoIme == k.Username)
                {

                    g = false;
                }
            }
            foreach (Dispecer u in disp)
            {

                if (u.KorisnickoIme == k.Username)
                {

                    g = false;
                }
            }

            if (g)
            {
                Musterija user = new Musterija();
                user.KorisnickoIme = k.Username;
                user.Lozinka = k.Prezime;
                user.Ime = k.Ime;
                user.Prezime = k.Prezime;
                if (k.Pol.ToString() == "Zensko")
                {
                    user.Pol = Enums.PolKorisnika.Zensko;
                }
                else
                {
                    user.Pol = Enums.PolKorisnika.Musko;
                }
                user.JMBG = k.Jmbg;
                user.KontaktTelefon = k.Telefon;
                user.Email = k.Email;
                user.Uloga = Enums.UlogaKorisnika.Musterija;


                users.Add(user);
                xml.WriteUsers(users, ss);

                return true;
            }
            else
            {
                return false;
            }

        }



        [HttpPost]
        [ActionName("GetFilterUser")]
        public List<Voznja> GetFilterUser([FromBody]KorisnikFilter k)
        {
            //string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");
            if (k.Drivess == null)
            {
                return new List<Voznja>();
            }
            //List<Voznja> listaDrives = xml.ReadDrives(ss);
            List<Voznja> listaDrives = k.Drivess;
            List<Voznja> listaDrives1 = new List<Voznja>();
            if (k.Status == null || k.Status == "")
            {
                return listaDrives1;
            }

            foreach (Voznja d in listaDrives)
            {
                if (d.Stat == (Enums.StatusVoznje)int.Parse(k.Status))
                {
                    listaDrives1.Add(d);
                }
            }
            //if ((Enums.UlogaKorisnika)int.Parse(k.Uloga) == Enums.UlogaKorisnika.Musterija)
            //{
            //    foreach (Voznja d in listaDrives)
            //    {
            //        if (d.Stat == (Enums.StatusVoznje)int.Parse(k.Status) && d.Mus.KorisnickoIme == k.Username)
            //        {
            //            listaDrives1.Add(d);
            //        }
            //    }
            //}
            //else if ((Enums.UlogaKorisnika)int.Parse(k.Uloga) == Enums.UlogaKorisnika.Vozac)
            //{
            //    foreach (Voznja d in listaDrives)
            //    {
            //        if (d.Stat == (Enums.StatusVoznje)int.Parse(k.Status) && d.Voz.KorisnickoIme == k.Username)
            //        {
            //            listaDrives1.Add(d);
            //        }
            //    }
            //}
            //else if ((Enums.UlogaKorisnika)int.Parse(k.Uloga) == Enums.UlogaKorisnika.Dispecer)
            //{
            //    foreach (Voznja d in listaDrives)
            //    {
            //        if (d.Stat == (Enums.StatusVoznje)int.Parse(k.Status) && d.Disp.KorisnickoIme == k.Username)
            //        {
            //            listaDrives1.Add(d);
            //        }
            //    }
            //}
            return listaDrives1;
        }

        [HttpPost]
        [ActionName("GetFilterUserAll")]
        public List<Voznja> GetFilterUserAll([FromBody]KorisnikFilter k)
        {
            //string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");
            if (k.Drivess == null)
            {
                return new List<Voznja>();
            }
            //List<Voznja> listaDrives = xml.ReadDrives(ss);
            List<Voznja> listaDrives = k.Drivess;
            List<Voznja> listaDrives1 = new List<Voznja>();

            if (k.Status == null || k.Status == "")
            {
                return listaDrives;
            }
            if ((Enums.UlogaKorisnika)int.Parse(k.Uloga) == Enums.UlogaKorisnika.Dispecer)
            {
                foreach (Voznja d in listaDrives)
                {
                    if (d.Stat == (Enums.StatusVoznje)int.Parse(k.Status))
                    {
                        listaDrives1.Add(d);
                    }
                }
            }
            return listaDrives1;
        }

        //[HttpGet]
        //[ActionName("SortingUser")]
        //public List<Voznja> SortingUser(string k)
        //{
        //    string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");

        //    List<Voznja> listaDrives = xml.ReadDrives(ss);
        //    List<Voznja> listaDrives1 = new List<Voznja>();
        //     foreach (Voznja d in listaDrives)
        //     {
        //            if (d.Mus.KorisnickoIme == k || d.Voz.KorisnickoIme == k || d.Disp.KorisnickoIme== k)
        //            {
        //                listaDrives1.Add(d);
        //            }
        //     }
        //    List<Voznja> sortiranaVoznja = listaDrives1.OrderByDescending(o => o.Kom.Ocena).ToList();

        //    return sortiranaVoznja;
        //}

        [HttpPost]
        [ActionName("SortingUser")]
        public List<Voznja> SortingUser([FromBody]KorisnikSort k)
        {
            // string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");
            List<Voznja> listaDrives = k.Drivess;
            List<Voznja> sortiranaVoznja = new List<Voznja>();
            if (k.PoCemu == 0)
            {
                sortiranaVoznja = listaDrives.OrderByDescending(o => o.Kom.Ocena).ToList();
            }
            else if (k.PoCemu == 1)
            {
                sortiranaVoznja = listaDrives.OrderByDescending(o => DateTime.Parse(o.DatumIVremePorudzbine)).ToList();
            }




            return sortiranaVoznja;
        }

        [HttpPost]
        [ActionName("OtkaziVoznju")]
        public Voznja OtkaziVoznju([FromBody]PomocnaVoznja k)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");
            List<Voznja> lista = xml.ReadDrives(ss);
            Voznja ret = new Voznja();
            foreach(Voznja v in lista)
            {
                if(v.Mus.KorisnickoIme == k.Voznj.Mus.KorisnickoIme && DateTime.Parse(v.DatumIVremePorudzbine) == DateTime.Parse(k.Voznj.DatumIVremePorudzbine))
                {
                    v.Stat = Enums.StatusVoznje.Otkazana;
                    ret = v;
                    break;
                }
            }
            xml.WriteDrives(lista, ss);
            return ret;
        }

        [HttpPost]
        [ActionName("Komentarisanje")]
        public bool Komentarisanje([FromBody]PomocniKomentar k)
        {
            string ss = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Voznje.xml");
            List<Voznja> lista = xml.ReadDrives(ss);
            bool ret = false;
            foreach (Voznja v in lista)
            {
                if (v.Mus.KorisnickoIme == k.Voz.Mus.KorisnickoIme && DateTime.Parse(v.DatumIVremePorudzbine) == DateTime.Parse(k.Voz.DatumIVremePorudzbine))
                {
                    v.Kom.Datum = DateTime.Parse(String.Format("{0:F}", DateTime.Now));
                    v.Kom.Opis = k.KomOpis;
                    v.Kom.Ocena = int.Parse(k.KomOcena);
                    v.Kom.KorKomUsername = k.Voz.Kom.KorKomUsername;
                    ret = true;
                    break;
                }
            }
            xml.WriteDrives(lista, ss);
            return ret;
        }
    }
}
