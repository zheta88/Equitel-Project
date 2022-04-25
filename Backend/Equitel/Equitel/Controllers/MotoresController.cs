using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using Dapper;

namespace Equitel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MotoresController : ControllerBase
    {
        private string conn = @"Data Source =EN911305\MSSQLSERVER1; Initial Catalog = EquitelDB; Integrated Security = True";

        [HttpGet] 
        public IActionResult Get()
        {
           IEnumerable<Models.Motores> lst = new List<Models.Motores>();
            using (var db = new SqlConnection(conn))
            {
                var sql = "SELECT * FROM motores";

                lst = db.Query<Models.Motores>(sql);
            }
            return Ok(lst);
        }
        [HttpPost]
        public IActionResult Insert(Models.Motores model)
        {
           int result=0;
            using (var db = new SqlConnection(conn))
            {
                var sql = "INSERT INTO motores" + " VALUES (@descripcion_motor,@potencia,@valor_importacion)";
                result  = db.Execute(sql, model);
            }
            return Ok(result);
        }
        [HttpPut]
        public IActionResult Edit(Models.Motores model)
        {
            int result = 0;
            using (var db = new SqlConnection(conn))
            {
                var sql = "UPDATE motores SET descripcion_motor=@descripcion_motor,potencia=@potencia,valor_importacion=@valor_importacion" + " WHERE id_motor=@id_motor";
                result = db.Execute(sql, model);
            }
            return Ok(result);
        }

        //[HttpDelete("{id_motor}")]
        //public IActionResult Delete(int id_motor)
        //{
        //   MotoresController result = new resultado
        //    using (var db = new SqlConnection(conn))
        //    {
        //        var sql = "DELETE from motores WHERE id_motor= @id_motor";
        //        result = db.Execute(sql, id_motor);
        //    }
        //    return Ok(result);
        //}
        // DELETE api/aircraft/id
        [HttpDelete("{id_motor}")]
        public async Task<IActionResult> Delete(int id_motor)
        {

            using (var connection = new SqlConnection(conn))
            {
                await connection.OpenAsync();
                var sqlStatement = "DELETE motores WHERE id_motor = @id_motor";
                await connection.ExecuteAsync(sqlStatement, new { id_motor = id_motor });
            }
            return Ok();
        }

    }
}
