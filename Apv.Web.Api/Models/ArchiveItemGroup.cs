﻿namespace Apv.Web.Api.Models
{
    using System.IO;

    public class ArchiveItemGroup
    {
        public string Name { get; set; }
        public string FolderPath { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }

        public string Directory
        {
            get { return Path.GetFileName(FolderPath.TrimEnd(Path.DirectorySeparatorChar)); }
        }
    }
}