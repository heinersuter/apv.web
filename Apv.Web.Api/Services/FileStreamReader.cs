namespace Apv.Web.Api.Services
{
    using System;
    using System.IO;
    using System.Net;
    using System.Net.Http;
    using System.Web;

    public class FileStreamReader
    {
        private readonly string _filePath;

        public FileStreamReader(string filePath)
        {
            _filePath = filePath;
        }
        public async void WriteToStream(Stream outputStream, HttpContent content, TransportContext context)
        {
            try
            {
                var buffer = new byte[65536];

                using (var fileStream = File.Open(_filePath, FileMode.Open, FileAccess.Read))
                {
                    var length = (int)fileStream.Length;
                    var bytesRead = 1;

                    while (length > 0 && bytesRead > 0)
                    {
                        bytesRead = fileStream.Read(buffer, 0, Math.Min(length, buffer.Length));
                        await outputStream.WriteAsync(buffer, 0, bytesRead);
                        length -= bytesRead;
                    }
                }
            }
            catch (HttpException)
            {
            }
            finally
            {
                outputStream.Close();
            }
        }
    }
}