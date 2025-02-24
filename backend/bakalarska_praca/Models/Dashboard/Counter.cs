﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bakalarska_praca.Models
{
    /// <summary>Class <c>Counter</c> models counters of every alert category </summary>
    public class Counter
    {

        public int AlertsTotal { get; set; } = 0;
        public int AlertsLow { get; set; } = 0;
        public int AlertsMedium{ get; set; } = 0;
        public int AlertsHigh { get; set; } = 0;
        public int AlertsCritical { get; set; } = 0;

    }
}
