namespace Apv.Web.DataAccess.Model
{
    using System.Data.Entity;

    public class ArchiveContext : DbContext
    {
        public ArchiveContext()
            : base("name=ArchiveContext")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }

        public DbSet<ArchiveItemGroupConfig> ArchiveItemGroupConfigs { get; set; }
    }
}
