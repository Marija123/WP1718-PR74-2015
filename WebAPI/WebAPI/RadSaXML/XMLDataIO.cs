
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Xml.Serialization;
using WebAPI.Models;

namespace WebAPI.DataIO
{
    public class XMLDataIO
    {
        public List<Musterija> ReadUsers(string fileName)
        {
            XmlSerializer desrializer = new XmlSerializer(typeof(List<Musterija>));
            List<Musterija> retVal = new List<Musterija>();
            if (File.Exists(fileName)){
                using (TextReader reader = new StreamReader(fileName))
                {
                    object obj = desrializer.Deserialize(reader);
                    retVal = (List<Musterija>)obj;
                }
            }
            return retVal;
        }

        public void WriteUsers(List<Musterija> users, string fileName)
        {
            XmlSerializer xml = new XmlSerializer(typeof(List<Musterija>));
            using (TextWriter write = new StreamWriter(fileName))
            {
                xml.Serialize(write, users);
            }
        }

        public List<Dispecer> ReadDispecer(string fileName)
        {
            XmlSerializer desrializer = new XmlSerializer(typeof(List<Dispecer>));
            List<Dispecer> retVal = new List<Dispecer>();
            if (File.Exists(fileName))
            {
                using (TextReader reader = new StreamReader(fileName))
                {
                    object obj = desrializer.Deserialize(reader);
                    retVal = (List<Dispecer>)obj;
                }
            }
            return retVal;
        }

        public void WriteDispecer(List<Dispecer> users, string fileName)
        {
            XmlSerializer xml = new XmlSerializer(typeof(List<Dispecer>));
            using (TextWriter write = new StreamWriter(fileName))
            {
                xml.Serialize(write, users);
            }
        }

        public List<Vozac> ReadDrivers(string fileName)
        {
            XmlSerializer desrializer = new XmlSerializer(typeof(List<Vozac>));
            List<Vozac> retVal = new List<Vozac>();
            if (File.Exists(fileName))
            {
                using (TextReader reader = new StreamReader(fileName))
                {
                    object obj = desrializer.Deserialize(reader);
                    retVal = (List<Vozac>)obj;
                }
            }
            return retVal;
        }

        public void WriteDrivers(List<Vozac> drives, string fileName)
        {
            XmlSerializer xml = new XmlSerializer(typeof(List<Vozac>));
            using (TextWriter write = new StreamWriter(fileName))
            {
                xml.Serialize(write, drives);
            }
        }

        public List<Voznja> ReadDrives(string fileName)
        {
            XmlSerializer desrializer = new XmlSerializer(typeof(List<Voznja>));
            List<Voznja> retVal = new List<Voznja>();
            if (File.Exists(fileName))
            {
                using (TextReader reader = new StreamReader(fileName))
                {
                    object obj = desrializer.Deserialize(reader);
                    retVal = (List<Voznja>)obj;
                }
            }
            return retVal;
        }

        public void WriteDrives(List<Voznja> drives, string fileName)
        {
            XmlSerializer xml = new XmlSerializer(typeof(List<Voznja>));
            using (TextWriter write = new StreamWriter(fileName))
            {
                xml.Serialize(write, drives);
            }
        }

        public List<Automobil> ReadAuto(string fileName)
        {
            XmlSerializer desrializer = new XmlSerializer(typeof(List<Automobil>));
            List<Automobil> retVal = new List<Automobil>();
            if (File.Exists(fileName))
            {
                using (TextReader reader = new StreamReader(fileName))
                {
                    object obj = desrializer.Deserialize(reader);
                    retVal = (List<Automobil>)obj;
                }
            }
            return retVal;
        }

        public void WriteAuta(List<Automobil> drives, string fileName)
        {
            XmlSerializer xml = new XmlSerializer(typeof(List<Automobil>));
            using (TextWriter write = new StreamWriter(fileName))
            {
                xml.Serialize(write, drives);
            }
        }
    }
}