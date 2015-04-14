namespace Apv.Web.Api.Services
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.IO;
    using System.Web.Hosting;

    public class FileSystemService
    {
        private readonly string _rootDir;

        public FileSystemService()
        {
            if (Debugger.IsAttached)
            {
                _rootDir = HostingEnvironment.MapPath("~/archiveItems");
            }
            else
            {
                _rootDir = HostingEnvironment.MapPath("~/../archiveItems");
            }

            if (_rootDir == null)
            {
                throw new Exception("The root directory for the archiveItems seems not to exist!");
            }
        }

        public IEnumerable<string> GetGroupDirectories()
        {
            var directories = Directory.GetDirectories(_rootDir);
            return directories;
        }

        public IEnumerable<string> GetFilesInGroup(string archiveItemGroup)
        {
            var directory = Path.Combine(_rootDir, archiveItemGroup);
            var files = Directory.GetFiles(directory);
            return files;
        }

        //public byte[] GetFileBytes(string archiveItemGroup, string fileName)
        //{
        //    var filePath = Path.Combine(_rootDir, archiveItemGroup);
        //    filePath = Path.Combine(filePath, fileName);

        //    using (var fileStream = new FileStream(filePath, FileMode.Open))
        //    {
        //        var image = Image.FromStream(fileStream);
        //        var memoryStream = new MemoryStream();
        //        image.Save(memoryStream, ImageFormat.Jpeg);
        //        var result = memoryStream.ToArray();
        //        return result;
        //    }
        //}

        public FileStreamReader GetFileStreamReader(string archiveItemGroup, string fileName)
        {
            var filePath = Path.Combine(_rootDir, archiveItemGroup);
            filePath = Path.Combine(filePath, fileName);

            return new FileStreamReader(filePath);
        }
    }
}