using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApplication.Models
{
    // Models returned by MeController actions.
    public class GetViewModel
    {
        public string Distance { get; set; }
        public string Time { get; set; }
    }
}