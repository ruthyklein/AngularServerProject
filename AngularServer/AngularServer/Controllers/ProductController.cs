using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        List<Product> products=new List<Product>();
        // GET: api/<ProductsController>
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return products;

        }

        // GET api/<ProductsController>/5
        [HttpGet("{id}")]
        public Product Get(int id)
        {
            return products.Find(x => x.Id == id);
        }

        // POST api/<ProductsController>
        [HttpPost]
        public IEnumerable<Product> Post([FromBody] Product pro)
        {
            products.Add(pro);
            return products;
        }

        // PUT api/<ProductsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Product pro)
        {
            var findPro=products.Find(x => x.Id == id);
            findPro.Id=pro.Id;
            findPro.Name=pro.Name;
            //findPro.Description=pro.Description;
            findPro.Price = pro.Price;
            findPro.OutOfStock = pro.OutOfStock;


        }

        // DELETE api/<ProductsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var findPro = products.Find(x => x.Id == id);
           products.Remove(findPro);
        }
    }
}
