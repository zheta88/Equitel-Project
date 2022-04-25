namespace Equitel
{
    public static class Startup
    {

        private static readonly string MyCors = "myCors";
        public static WebApplication InicializarApp(string[] args)
        {
            var builder= WebApplication.CreateBuilder(args);
            ConfigureServices(builder);
            var app = builder.Build();
            Configure(app);
            return app;
        }
        private static void ConfigureServices(WebApplicationBuilder builder)
        {
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: MyCors, builder =>
                 {
                     //builder.WithOrigins("http://localhost:4200/");
                     builder.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost").AllowAnyHeader().AllowAnyMethod();


                 });

            });
        }
        private static void Configure(WebApplication app)
        {
            if (app.Environment.IsDevelopment())
            {

                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();
            app.UseCors(MyCors);


        }

    }
}
