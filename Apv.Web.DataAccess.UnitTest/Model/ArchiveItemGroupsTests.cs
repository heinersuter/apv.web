namespace Apv.Web.DataAccess.UnitTest.Model
{
    using System;
    using System.Linq;
    using Apv.Web.DataAccess.Model;
    using Microsoft.VisualStudio.TestTools.UnitTesting;

    [TestClass]
    public class ArchiveItemGroupsTests
    {
        [TestMethod]
        public void AddArchiveItemGroupToDb()
        {
            using (var db = new ArchiveContext())
            {
                var archiveItemGroup = new ArchiveItemGroupConfig
                    {
                        Name = "Test-" + DateTime.Now,
                        FolderPath = @"C:\Users\taasuhe2\progis\apv.web\Apv.Web.Api\archiveItems\1979_Wölfe_PfiLa_Kirchlerau"
                    };
                db.ArchiveItemGroupConfigs.Add(archiveItemGroup);
                db.SaveChanges();

                // Display all Blogs from the database 
                var query = from b in db.ArchiveItemGroupConfigs
                            orderby b.Name
                            select b;

                foreach (var item in query)
                {
                    Console.WriteLine(item.Name);
                }
            }
        }
    }
}
