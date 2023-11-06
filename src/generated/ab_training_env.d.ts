import * as runtime from '@prisma/client/runtime/library';
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result
import { 
    AtLeast,
    Extends,
    Has,
    Or,
    GetScalarType, 
    SortOrder, 
    BatchPayload,
    FieldRef,
    False,
    Keys,
    ExcludeUnderscoreKeys,
    Subset, 
    SelectSubset,
    InputJsonValue,
    JsonNullValueInput,
    JsonFilter,
    StringFilter,
    IntFilter,
    StringFieldUpdateOperationsInput,
    IntFieldUpdateOperationsInput,
    JsonWithAggregatesFilter,
    StringWithAggregatesFilter,
    IntWithAggregatesFilter,
    JsonValue,
    PrismaPromise,
    PickEnumerable,
    SubsetIntersection,
    True,
    TypeMap,
    MaybeTupleToUnion,
    GetHavingFields,
    XOR,
    SortOrderInput,
    NullableJsonNullValueInput,
    DateTimeNullableFilter,
    StringNullableFilter,
    NestedDateTimeNullableWithAggregatesFilter,
    NestedDateTimeNullableFilter,
    NullableDateTimeFieldUpdateOperationsInput,
    NullableStringFieldUpdateOperationsInput,
    NullableIntFieldUpdateOperationsInput,
    NullableBoolFieldUpdateOperationsInput,
    StringNullableWithAggregatesFilter,
    DateTimeNullableWithAggregatesFilter,
    JsonNullableWithAggregatesFilter,
    UuidFilter,
    BoolNullableFilter,
    IntNullableFilter,
    JsonNullableFilter,
    NullableEnumstatus_typeFieldUpdateOperationsInput,
    Enumstatus_typeNullableWithAggregatesFilter,
    BoolNullableWithAggregatesFilter,
    IntNullableWithAggregatesFilter,
    UuidWithAggregatesFilter,
    Enumstatus_typeNullableFilter,   
    


 } from "./utils"


export type ab_training_env = $Result.DefaultSelection<$ab_training_envPayload>

/**
 * Enums
 */
export namespace $Enums {
    export const status_type: {
    CONFIGURING: 'CONFIGURING',
    READY: 'READY',
    REQUESTED: 'REQUESTED',
    PENDING: 'PENDING',
    IN_PROGRESS: 'IN_PROGRESS',
    STOPPING: 'STOPPING',
    TERMINATED: 'TERMINATED',
    ERROR: 'ERROR',
    ERROR_DURING_DELETE: 'ERROR_DURING_DELETE'
  };
  
  export type status_type = (typeof status_type)[keyof typeof status_type]
  
  }
  
  export type status_type = $Enums.status_type
  
  export const status_type: typeof $Enums.status_type

 /**
   * Model ab_training_env
   */

 export type AggregateAb_training_env = {
    _count: Ab_training_envCountAggregateOutputType | null
    _avg: Ab_training_envAvgAggregateOutputType | null
    _sum: Ab_training_envSumAggregateOutputType | null
    _min: Ab_training_envMinAggregateOutputType | null
    _max: Ab_training_envMaxAggregateOutputType | null
  }

  export type Ab_training_envAvgAggregateOutputType = {
    expires_in: number | null
  }

  export type Ab_training_envSumAggregateOutputType = {
    expires_in: number | null
  }

  export type Ab_training_envMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    course_name: string | null
    user_id: string | null
    job_id: string | null
    product_id: string | null
    status: $Enums.status_type | null
    status_message: string | null
    started_at: Date | null
    completed_at: Date | null
    deleted: boolean | null
    customer_id: string | null
    instance_id: string | null
    instance_url: string | null
    region: string | null
    expires_in: number | null
    password: string | null
    log_stream: string | null
    term: string | null
  }

  export type Ab_training_envMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    course_name: string | null
    user_id: string | null
    job_id: string | null
    product_id: string | null
    status: $Enums.status_type | null
    status_message: string | null
    started_at: Date | null
    completed_at: Date | null
    deleted: boolean | null
    customer_id: string | null
    instance_id: string | null
    instance_url: string | null
    region: string | null
    expires_in: number | null
    password: string | null
    log_stream: string | null
    term: string | null
  }

  export type Ab_training_envCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    course_name: number
    user_id: number
    job_id: number
    product_id: number
    status: number
    status_message: number
    started_at: number
    completed_at: number
    deleted: number
    customer_id: number
    instance_id: number
    instance_url: number
    region: number
    expires_in: number
    password: number
    log_stream: number
    term: number
    urls: number
    _all: number
  }


  export type Ab_training_envAvgAggregateInputType = {
    expires_in?: true
  }

  export type Ab_training_envSumAggregateInputType = {
    expires_in?: true
  }

  export type Ab_training_envMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    course_name?: true
    user_id?: true
    job_id?: true
    product_id?: true
    status?: true
    status_message?: true
    started_at?: true
    completed_at?: true
    deleted?: true
    customer_id?: true
    instance_id?: true
    instance_url?: true
    region?: true
    expires_in?: true
    password?: true
    log_stream?: true
    term?: true
  }

  export type Ab_training_envMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    course_name?: true
    user_id?: true
    job_id?: true
    product_id?: true
    status?: true
    status_message?: true
    started_at?: true
    completed_at?: true
    deleted?: true
    customer_id?: true
    instance_id?: true
    instance_url?: true
    region?: true
    expires_in?: true
    password?: true
    log_stream?: true
    term?: true
  }

  export type Ab_training_envCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    course_name?: true
    user_id?: true
    job_id?: true
    product_id?: true
    status?: true
    status_message?: true
    started_at?: true
    completed_at?: true
    deleted?: true
    customer_id?: true
    instance_id?: true
    instance_url?: true
    region?: true
    expires_in?: true
    password?: true
    log_stream?: true
    term?: true
    urls?: true
    _all?: true
  }

  export type Ab_training_envAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ab_training_env to aggregate.
     */
    where?: ab_training_envWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_training_envs to fetch.
     */
    orderBy?: ab_training_envOrderByWithRelationInput | ab_training_envOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ab_training_envWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_training_envs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_training_envs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ab_training_envs
    **/
    _count?: true | Ab_training_envCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ab_training_envAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ab_training_envSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ab_training_envMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ab_training_envMaxAggregateInputType
  }

  export type GetAb_training_envAggregateType<T extends Ab_training_envAggregateArgs> = {
        [P in keyof T & keyof AggregateAb_training_env]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAb_training_env[P]>
      : GetScalarType<T[P], AggregateAb_training_env[P]>
  }




  export type ab_training_envGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ab_training_envWhereInput
    orderBy?: ab_training_envOrderByWithAggregationInput | ab_training_envOrderByWithAggregationInput[]
    by: Ab_training_envScalarFieldEnum[] | Ab_training_envScalarFieldEnum
    having?: ab_training_envScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ab_training_envCountAggregateInputType | true
    _avg?: Ab_training_envAvgAggregateInputType
    _sum?: Ab_training_envSumAggregateInputType
    _min?: Ab_training_envMinAggregateInputType
    _max?: Ab_training_envMaxAggregateInputType
  }

  export type Ab_training_envGroupByOutputType = {
    id: string
    created_at: Date | null
    updated_at: Date | null
    course_name: string
    user_id: string
    job_id: string | null
    product_id: string | null
    status: $Enums.status_type | null
    status_message: string | null
    started_at: Date | null
    completed_at: Date | null
    deleted: boolean | null
    customer_id: string | null
    instance_id: string | null
    instance_url: string | null
    region: string | null
    expires_in: number | null
    password: string | null
    log_stream: string | null
    term: string | null
    urls: JsonValue | null
    _count: Ab_training_envCountAggregateOutputType | null
    _avg: Ab_training_envAvgAggregateOutputType | null
    _sum: Ab_training_envSumAggregateOutputType | null
    _min: Ab_training_envMinAggregateOutputType | null
    _max: Ab_training_envMaxAggregateOutputType | null
  }


  type GetAb_training_envGroupByPayload<T extends ab_training_envGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Ab_training_envGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ab_training_envGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ab_training_envGroupByOutputType[P]>
            : GetScalarType<T[P], Ab_training_envGroupByOutputType[P]>
        }
      >
    >


  export type ab_training_envSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    course_name?: boolean
    user_id?: boolean
    job_id?: boolean
    product_id?: boolean
    status?: boolean
    status_message?: boolean
    started_at?: boolean
    completed_at?: boolean
    deleted?: boolean
    customer_id?: boolean
    instance_id?: boolean
    instance_url?: boolean
    region?: boolean
    expires_in?: boolean
    password?: boolean
    log_stream?: boolean
    term?: boolean
    urls?: boolean
  }, ExtArgs["result"]["ab_training_env"]>

  export type ab_training_envSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    course_name?: boolean
    user_id?: boolean
    job_id?: boolean
    product_id?: boolean
    status?: boolean
    status_message?: boolean
    started_at?: boolean
    completed_at?: boolean
    deleted?: boolean
    customer_id?: boolean
    instance_id?: boolean
    instance_url?: boolean
    region?: boolean
    expires_in?: boolean
    password?: boolean
    log_stream?: boolean
    term?: boolean
    urls?: boolean
  }


  export type $ab_training_envPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ab_training_env"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date | null
      updated_at: Date | null
      course_name: string
      user_id: string
      job_id: string | null
      product_id: string | null
      status: $Enums.status_type | null
      status_message: string | null
      started_at: Date | null
      completed_at: Date | null
      deleted: boolean | null
      customer_id: string | null
      instance_id: string | null
      instance_url: string | null
      region: string | null
      expires_in: number | null
      password: string | null
      log_stream: string | null
      term: string | null
      urls: JsonValue | null
    }, ExtArgs["result"]["ab_training_env"]>
    composites: {}
  }


  type ab_training_envGetPayload<S extends boolean | null | undefined | ab_training_envDefaultArgs> = $Result.GetResult<$ab_training_envPayload, S>

  type ab_training_envCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ab_training_envFindManyArgs, 'select' | 'include'> & {
      select?: Ab_training_envCountAggregateInputType | true
    }

  export interface ab_training_envDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['ab_training_env'], meta: { name: 'ab_training_env' } }
    /**
     * Find zero or one Ab_training_env that matches the filter.
     * @param {ab_training_envFindUniqueArgs} args - Arguments to find a Ab_training_env
     * @example
     * // Get one Ab_training_env
     * const ab_training_env = await prisma.ab_training_env.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ab_training_envFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ab_training_envFindUniqueArgs<ExtArgs>>
    ): Prisma__ab_training_envClient<$Result.GetResult<$ab_training_envPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ab_training_env that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ab_training_envFindUniqueOrThrowArgs} args - Arguments to find a Ab_training_env
     * @example
     * // Get one Ab_training_env
     * const ab_training_env = await prisma.ab_training_env.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ab_training_envFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_training_envFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ab_training_envClient<$Result.GetResult<$ab_training_envPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ab_training_env that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_training_envFindFirstArgs} args - Arguments to find a Ab_training_env
     * @example
     * // Get one Ab_training_env
     * const ab_training_env = await prisma.ab_training_env.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ab_training_envFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_training_envFindFirstArgs<ExtArgs>>
    ): Prisma__ab_training_envClient<$Result.GetResult<$ab_training_envPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ab_training_env that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_training_envFindFirstOrThrowArgs} args - Arguments to find a Ab_training_env
     * @example
     * // Get one Ab_training_env
     * const ab_training_env = await prisma.ab_training_env.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ab_training_envFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_training_envFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ab_training_envClient<$Result.GetResult<$ab_training_envPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ab_training_envs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_training_envFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ab_training_envs
     * const ab_training_envs = await prisma.ab_training_env.findMany()
     * 
     * // Get first 10 Ab_training_envs
     * const ab_training_envs = await prisma.ab_training_env.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ab_training_envWithIdOnly = await prisma.ab_training_env.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ab_training_envFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_training_envFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$ab_training_envPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ab_training_env.
     * @param {ab_training_envCreateArgs} args - Arguments to create a Ab_training_env.
     * @example
     * // Create one Ab_training_env
     * const Ab_training_env = await prisma.ab_training_env.create({
     *   data: {
     *     // ... data to create a Ab_training_env
     *   }
     * })
     * 
    **/
    create<T extends ab_training_envCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ab_training_envCreateArgs<ExtArgs>>
    ): Prisma__ab_training_envClient<$Result.GetResult<$ab_training_envPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ab_training_envs.
     *     @param {ab_training_envCreateManyArgs} args - Arguments to create many Ab_training_envs.
     *     @example
     *     // Create many Ab_training_envs
     *     const ab_training_env = await prisma.ab_training_env.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ab_training_envCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_training_envCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ab_training_env.
     * @param {ab_training_envDeleteArgs} args - Arguments to delete one Ab_training_env.
     * @example
     * // Delete one Ab_training_env
     * const Ab_training_env = await prisma.ab_training_env.delete({
     *   where: {
     *     // ... filter to delete one Ab_training_env
     *   }
     * })
     * 
    **/
    delete<T extends ab_training_envDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ab_training_envDeleteArgs<ExtArgs>>
    ): Prisma__ab_training_envClient<$Result.GetResult<$ab_training_envPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ab_training_env.
     * @param {ab_training_envUpdateArgs} args - Arguments to update one Ab_training_env.
     * @example
     * // Update one Ab_training_env
     * const ab_training_env = await prisma.ab_training_env.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ab_training_envUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ab_training_envUpdateArgs<ExtArgs>>
    ): Prisma__ab_training_envClient<$Result.GetResult<$ab_training_envPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ab_training_envs.
     * @param {ab_training_envDeleteManyArgs} args - Arguments to filter Ab_training_envs to delete.
     * @example
     * // Delete a few Ab_training_envs
     * const { count } = await prisma.ab_training_env.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ab_training_envDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_training_envDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ab_training_envs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_training_envUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ab_training_envs
     * const ab_training_env = await prisma.ab_training_env.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ab_training_envUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ab_training_envUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ab_training_env.
     * @param {ab_training_envUpsertArgs} args - Arguments to update or create a Ab_training_env.
     * @example
     * // Update or create a Ab_training_env
     * const ab_training_env = await prisma.ab_training_env.upsert({
     *   create: {
     *     // ... data to create a Ab_training_env
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ab_training_env we want to update
     *   }
     * })
    **/
    upsert<T extends ab_training_envUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ab_training_envUpsertArgs<ExtArgs>>
    ): Prisma__ab_training_envClient<$Result.GetResult<$ab_training_envPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ab_training_envs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_training_envCountArgs} args - Arguments to filter Ab_training_envs to count.
     * @example
     * // Count the number of Ab_training_envs
     * const count = await prisma.ab_training_env.count({
     *   where: {
     *     // ... the filter for the Ab_training_envs we want to count
     *   }
     * })
    **/
    count<T extends ab_training_envCountArgs>(
      args?: Subset<T, ab_training_envCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ab_training_envCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ab_training_env.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ab_training_envAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ab_training_envAggregateArgs>(args: Subset<T, Ab_training_envAggregateArgs>): PrismaPromise<GetAb_training_envAggregateType<T>>

    /**
     * Group by Ab_training_env.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_training_envGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ab_training_envGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ab_training_envGroupByArgs['orderBy'] }
        : { orderBy?: ab_training_envGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ab_training_envGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAb_training_envGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the ab_training_env model
   */
  readonly fields: ab_training_envFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ab_training_env.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ab_training_envClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ab_training_env model
   */ 
  interface ab_training_envFieldRefs {
    readonly id: FieldRef<"ab_training_env", 'String'>
    readonly created_at: FieldRef<"ab_training_env", 'DateTime'>
    readonly updated_at: FieldRef<"ab_training_env", 'DateTime'>
    readonly course_name: FieldRef<"ab_training_env", 'String'>
    readonly user_id: FieldRef<"ab_training_env", 'String'>
    readonly job_id: FieldRef<"ab_training_env", 'String'>
    readonly product_id: FieldRef<"ab_training_env", 'String'>
    readonly status: FieldRef<"ab_training_env", 'status_type'>
    readonly status_message: FieldRef<"ab_training_env", 'String'>
    readonly started_at: FieldRef<"ab_training_env", 'DateTime'>
    readonly completed_at: FieldRef<"ab_training_env", 'DateTime'>
    readonly deleted: FieldRef<"ab_training_env", 'Boolean'>
    readonly customer_id: FieldRef<"ab_training_env", 'String'>
    readonly instance_id: FieldRef<"ab_training_env", 'String'>
    readonly instance_url: FieldRef<"ab_training_env", 'String'>
    readonly region: FieldRef<"ab_training_env", 'String'>
    readonly expires_in: FieldRef<"ab_training_env", 'Int'>
    readonly password: FieldRef<"ab_training_env", 'String'>
    readonly log_stream: FieldRef<"ab_training_env", 'String'>
    readonly term: FieldRef<"ab_training_env", 'String'>
    readonly urls: FieldRef<"ab_training_env", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * ab_training_env findUnique
   */
  export type ab_training_envFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_training_env
     */
    select?: ab_training_envSelect<ExtArgs> | null
    /**
     * Filter, which ab_training_env to fetch.
     */
    where: ab_training_envWhereUniqueInput
  }


  /**
   * ab_training_env findUniqueOrThrow
   */
  export type ab_training_envFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_training_env
     */
    select?: ab_training_envSelect<ExtArgs> | null
    /**
     * Filter, which ab_training_env to fetch.
     */
    where: ab_training_envWhereUniqueInput
  }


  /**
   * ab_training_env findFirst
   */
  export type ab_training_envFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_training_env
     */
    select?: ab_training_envSelect<ExtArgs> | null
    /**
     * Filter, which ab_training_env to fetch.
     */
    where?: ab_training_envWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_training_envs to fetch.
     */
    orderBy?: ab_training_envOrderByWithRelationInput | ab_training_envOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ab_training_envs.
     */
    cursor?: ab_training_envWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_training_envs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_training_envs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ab_training_envs.
     */
    distinct?: Ab_training_envScalarFieldEnum | Ab_training_envScalarFieldEnum[]
  }


  /**
   * ab_training_env findFirstOrThrow
   */
  export type ab_training_envFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_training_env
     */
    select?: ab_training_envSelect<ExtArgs> | null
    /**
     * Filter, which ab_training_env to fetch.
     */
    where?: ab_training_envWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_training_envs to fetch.
     */
    orderBy?: ab_training_envOrderByWithRelationInput | ab_training_envOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ab_training_envs.
     */
    cursor?: ab_training_envWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_training_envs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_training_envs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ab_training_envs.
     */
    distinct?: Ab_training_envScalarFieldEnum | Ab_training_envScalarFieldEnum[]
  }


  /**
   * ab_training_env findMany
   */
  export type ab_training_envFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_training_env
     */
    select?: ab_training_envSelect<ExtArgs> | null
    /**
     * Filter, which ab_training_envs to fetch.
     */
    where?: ab_training_envWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_training_envs to fetch.
     */
    orderBy?: ab_training_envOrderByWithRelationInput | ab_training_envOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ab_training_envs.
     */
    cursor?: ab_training_envWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_training_envs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_training_envs.
     */
    skip?: number
    distinct?: Ab_training_envScalarFieldEnum | Ab_training_envScalarFieldEnum[]
  }


  /**
   * ab_training_env create
   */
  export type ab_training_envCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_training_env
     */
    select?: ab_training_envSelect<ExtArgs> | null
    /**
     * The data needed to create a ab_training_env.
     */
    data: XOR<ab_training_envCreateInput, ab_training_envUncheckedCreateInput>
  }


  /**
   * ab_training_env createMany
   */
  export type ab_training_envCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ab_training_envs.
     */
    data: ab_training_envCreateManyInput | ab_training_envCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ab_training_env update
   */
  export type ab_training_envUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_training_env
     */
    select?: ab_training_envSelect<ExtArgs> | null
    /**
     * The data needed to update a ab_training_env.
     */
    data: XOR<ab_training_envUpdateInput, ab_training_envUncheckedUpdateInput>
    /**
     * Choose, which ab_training_env to update.
     */
    where: ab_training_envWhereUniqueInput
  }


  /**
   * ab_training_env updateMany
   */
  export type ab_training_envUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ab_training_envs.
     */
    data: XOR<ab_training_envUpdateManyMutationInput, ab_training_envUncheckedUpdateManyInput>
    /**
     * Filter which ab_training_envs to update
     */
    where?: ab_training_envWhereInput
  }


  /**
   * ab_training_env upsert
   */
  export type ab_training_envUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_training_env
     */
    select?: ab_training_envSelect<ExtArgs> | null
    /**
     * The filter to search for the ab_training_env to update in case it exists.
     */
    where: ab_training_envWhereUniqueInput
    /**
     * In case the ab_training_env found by the `where` argument doesn't exist, create a new ab_training_env with this data.
     */
    create: XOR<ab_training_envCreateInput, ab_training_envUncheckedCreateInput>
    /**
     * In case the ab_training_env was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ab_training_envUpdateInput, ab_training_envUncheckedUpdateInput>
  }


  /**
   * ab_training_env delete
   */
  export type ab_training_envDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_training_env
     */
    select?: ab_training_envSelect<ExtArgs> | null
    /**
     * Filter which ab_training_env to delete.
     */
    where: ab_training_envWhereUniqueInput
  }


  /**
   * ab_training_env deleteMany
   */
  export type ab_training_envDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ab_training_envs to delete
     */
    where?: ab_training_envWhereInput
  }


  /**
   * ab_training_env without action
   */
  export type ab_training_envDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_training_env
     */
    select?: ab_training_envSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type ab_training_envWhereInput = {
    AND?: ab_training_envWhereInput | ab_training_envWhereInput[]
    OR?: ab_training_envWhereInput[]
    NOT?: ab_training_envWhereInput | ab_training_envWhereInput[]
    id?: UuidFilter<"ab_training_env"> | string
    created_at?: DateTimeNullableFilter<"ab_training_env"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ab_training_env"> | Date | string | null
    course_name?: StringFilter<"ab_training_env"> | string
    user_id?: StringFilter<"ab_training_env"> | string
    job_id?: StringNullableFilter<"ab_training_env"> | string | null
    product_id?: StringNullableFilter<"ab_training_env"> | string | null
    status?: Enumstatus_typeNullableFilter<"ab_training_env"> | $Enums.status_type | null
    status_message?: StringNullableFilter<"ab_training_env"> | string | null
    started_at?: DateTimeNullableFilter<"ab_training_env"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"ab_training_env"> | Date | string | null
    deleted?: BoolNullableFilter<"ab_training_env"> | boolean | null
    customer_id?: StringNullableFilter<"ab_training_env"> | string | null
    instance_id?: StringNullableFilter<"ab_training_env"> | string | null
    instance_url?: StringNullableFilter<"ab_training_env"> | string | null
    region?: StringNullableFilter<"ab_training_env"> | string | null
    expires_in?: IntNullableFilter<"ab_training_env"> | number | null
    password?: StringNullableFilter<"ab_training_env"> | string | null
    log_stream?: StringNullableFilter<"ab_training_env"> | string | null
    term?: StringNullableFilter<"ab_training_env"> | string | null
    urls?: JsonNullableFilter<"ab_training_env">
  }

  export type ab_training_envOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    course_name?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    status_message?: SortOrderInput | SortOrder
    started_at?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    customer_id?: SortOrderInput | SortOrder
    instance_id?: SortOrderInput | SortOrder
    instance_url?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    expires_in?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    log_stream?: SortOrderInput | SortOrder
    term?: SortOrderInput | SortOrder
    urls?: SortOrderInput | SortOrder
  }

  export type ab_training_envWhereUniqueInput = AtLeast<{
    id?: string
    job_id?: string
    instance_id?: string
    AND?: ab_training_envWhereInput | ab_training_envWhereInput[]
    OR?: ab_training_envWhereInput[]
    NOT?: ab_training_envWhereInput | ab_training_envWhereInput[]
    created_at?: DateTimeNullableFilter<"ab_training_env"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ab_training_env"> | Date | string | null
    course_name?: StringFilter<"ab_training_env"> | string
    user_id?: StringFilter<"ab_training_env"> | string
    product_id?: StringNullableFilter<"ab_training_env"> | string | null
    status?: Enumstatus_typeNullableFilter<"ab_training_env"> | $Enums.status_type | null
    status_message?: StringNullableFilter<"ab_training_env"> | string | null
    started_at?: DateTimeNullableFilter<"ab_training_env"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"ab_training_env"> | Date | string | null
    deleted?: BoolNullableFilter<"ab_training_env"> | boolean | null
    customer_id?: StringNullableFilter<"ab_training_env"> | string | null
    instance_url?: StringNullableFilter<"ab_training_env"> | string | null
    region?: StringNullableFilter<"ab_training_env"> | string | null
    expires_in?: IntNullableFilter<"ab_training_env"> | number | null
    password?: StringNullableFilter<"ab_training_env"> | string | null
    log_stream?: StringNullableFilter<"ab_training_env"> | string | null
    term?: StringNullableFilter<"ab_training_env"> | string | null
    urls?: JsonNullableFilter<"ab_training_env">
  }, "id" | "job_id" | "instance_id">

  export type ab_training_envOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    course_name?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    status_message?: SortOrderInput | SortOrder
    started_at?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    customer_id?: SortOrderInput | SortOrder
    instance_id?: SortOrderInput | SortOrder
    instance_url?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    expires_in?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    log_stream?: SortOrderInput | SortOrder
    term?: SortOrderInput | SortOrder
    urls?: SortOrderInput | SortOrder
    _count?: ab_training_envCountOrderByAggregateInput
    _avg?: ab_training_envAvgOrderByAggregateInput
    _max?: ab_training_envMaxOrderByAggregateInput
    _min?: ab_training_envMinOrderByAggregateInput
    _sum?: ab_training_envSumOrderByAggregateInput
  }


  export type ab_training_envScalarWhereWithAggregatesInput = {
    AND?: ab_training_envScalarWhereWithAggregatesInput | ab_training_envScalarWhereWithAggregatesInput[]
    OR?: ab_training_envScalarWhereWithAggregatesInput[]
    NOT?: ab_training_envScalarWhereWithAggregatesInput | ab_training_envScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ab_training_env"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"ab_training_env"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ab_training_env"> | Date | string | null
    course_name?: StringWithAggregatesFilter<"ab_training_env"> | string
    user_id?: StringWithAggregatesFilter<"ab_training_env"> | string
    job_id?: StringNullableWithAggregatesFilter<"ab_training_env"> | string | null
    product_id?: StringNullableWithAggregatesFilter<"ab_training_env"> | string | null
    status?: Enumstatus_typeNullableWithAggregatesFilter<"ab_training_env"> | $Enums.status_type | null
    status_message?: StringNullableWithAggregatesFilter<"ab_training_env"> | string | null
    started_at?: DateTimeNullableWithAggregatesFilter<"ab_training_env"> | Date | string | null
    completed_at?: DateTimeNullableWithAggregatesFilter<"ab_training_env"> | Date | string | null
    deleted?: BoolNullableWithAggregatesFilter<"ab_training_env"> | boolean | null
    customer_id?: StringNullableWithAggregatesFilter<"ab_training_env"> | string | null
    instance_id?: StringNullableWithAggregatesFilter<"ab_training_env"> | string | null
    instance_url?: StringNullableWithAggregatesFilter<"ab_training_env"> | string | null
    region?: StringNullableWithAggregatesFilter<"ab_training_env"> | string | null
    expires_in?: IntNullableWithAggregatesFilter<"ab_training_env"> | number | null
    password?: StringNullableWithAggregatesFilter<"ab_training_env"> | string | null
    log_stream?: StringNullableWithAggregatesFilter<"ab_training_env"> | string | null
    term?: StringNullableWithAggregatesFilter<"ab_training_env"> | string | null
    urls?: JsonNullableWithAggregatesFilter<"ab_training_env">
  }
  
  export type ab_training_envCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    course_name: string
    user_id: string
    job_id?: string | null
    product_id?: string | null
    status?: $Enums.status_type | null
    status_message?: string | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
    deleted?: boolean | null
    customer_id?: string | null
    instance_id?: string | null
    instance_url?: string | null
    region?: string | null
    expires_in?: number | null
    password?: string | null
    log_stream?: string | null
    term?: string | null
    urls?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ab_training_envUncheckedCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    course_name: string
    user_id: string
    job_id?: string | null
    product_id?: string | null
    status?: $Enums.status_type | null
    status_message?: string | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
    deleted?: boolean | null
    customer_id?: string | null
    instance_id?: string | null
    instance_url?: string | null
    region?: string | null
    expires_in?: number | null
    password?: string | null
    log_stream?: string | null
    term?: string | null
    urls?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ab_training_envUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course_name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstatus_typeFieldUpdateOperationsInput | $Enums.status_type | null
    status_message?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    instance_id?: NullableStringFieldUpdateOperationsInput | string | null
    instance_url?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    log_stream?: NullableStringFieldUpdateOperationsInput | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    urls?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ab_training_envUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course_name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstatus_typeFieldUpdateOperationsInput | $Enums.status_type | null
    status_message?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    instance_id?: NullableStringFieldUpdateOperationsInput | string | null
    instance_url?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    log_stream?: NullableStringFieldUpdateOperationsInput | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    urls?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ab_training_envCreateManyInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    course_name: string
    user_id: string
    job_id?: string | null
    product_id?: string | null
    status?: $Enums.status_type | null
    status_message?: string | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
    deleted?: boolean | null
    customer_id?: string | null
    instance_id?: string | null
    instance_url?: string | null
    region?: string | null
    expires_in?: number | null
    password?: string | null
    log_stream?: string | null
    term?: string | null
    urls?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ab_training_envUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course_name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstatus_typeFieldUpdateOperationsInput | $Enums.status_type | null
    status_message?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    instance_id?: NullableStringFieldUpdateOperationsInput | string | null
    instance_url?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    log_stream?: NullableStringFieldUpdateOperationsInput | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    urls?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ab_training_envUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course_name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstatus_typeFieldUpdateOperationsInput | $Enums.status_type | null
    status_message?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    instance_id?: NullableStringFieldUpdateOperationsInput | string | null
    instance_url?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    log_stream?: NullableStringFieldUpdateOperationsInput | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    urls?: NullableJsonNullValueInput | InputJsonValue
  }


  export type ab_training_envCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    course_name?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    product_id?: SortOrder
    status?: SortOrder
    status_message?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrder
    deleted?: SortOrder
    customer_id?: SortOrder
    instance_id?: SortOrder
    instance_url?: SortOrder
    region?: SortOrder
    expires_in?: SortOrder
    password?: SortOrder
    log_stream?: SortOrder
    term?: SortOrder
    urls?: SortOrder
  }

  export type ab_training_envAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ab_training_envMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    course_name?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    product_id?: SortOrder
    status?: SortOrder
    status_message?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrder
    deleted?: SortOrder
    customer_id?: SortOrder
    instance_id?: SortOrder
    instance_url?: SortOrder
    region?: SortOrder
    expires_in?: SortOrder
    password?: SortOrder
    log_stream?: SortOrder
    term?: SortOrder
  }

  export type ab_training_envMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    course_name?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    product_id?: SortOrder
    status?: SortOrder
    status_message?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrder
    deleted?: SortOrder
    customer_id?: SortOrder
    instance_id?: SortOrder
    instance_url?: SortOrder
    region?: SortOrder
    expires_in?: SortOrder
    password?: SortOrder
    log_stream?: SortOrder
    term?: SortOrder
  }


  export type ab_training_envSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ab_training_envDefaultArgs instead
     */
    export type ab_training_envArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ab_training_envDefaultArgs<ExtArgs>

  
    export const Ab_training_envScalarFieldEnum: {
        id: 'id',
        created_at: 'created_at',
        updated_at: 'updated_at',
        course_name: 'course_name',
        user_id: 'user_id',
        job_id: 'job_id',
        product_id: 'product_id',
        status: 'status',
        status_message: 'status_message',
        started_at: 'started_at',
        completed_at: 'completed_at',
        deleted: 'deleted',
        customer_id: 'customer_id',
        instance_id: 'instance_id',
        instance_url: 'instance_url',
        region: 'region',
        expires_in: 'expires_in',
        password: 'password',
        log_stream: 'log_stream',
        term: 'term',
        urls: 'urls'
      };
    
export type Ab_training_envScalarFieldEnum = (typeof Ab_training_envScalarFieldEnum)[keyof typeof Ab_training_envScalarFieldEnum]
    