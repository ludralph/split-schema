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
    TypeMap,
    SubsetIntersection,
    True,
    MaybeTupleToUnion,
    GetHavingFields,
    XOR,


 } from "./utils"

export type authentication_execution = $Result.DefaultSelection<$authentication_executionPayload>


/**
   * Model authentication_execution
   */

export type AggregateAuthentication_execution = {
    _count: Authentication_executionCountAggregateOutputType | null
    _avg: Authentication_executionAvgAggregateOutputType | null
    _sum: Authentication_executionSumAggregateOutputType | null
    _min: Authentication_executionMinAggregateOutputType | null
    _max: Authentication_executionMaxAggregateOutputType | null
  }

  export type Authentication_executionAvgAggregateOutputType = {
    id: number | null
  }

  export type Authentication_executionSumAggregateOutputType = {
    id: number | null
  }

  export type Authentication_executionMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Authentication_executionMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Authentication_executionCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Authentication_executionAvgAggregateInputType = {
    id?: true
  }

  export type Authentication_executionSumAggregateInputType = {
    id?: true
  }

  export type Authentication_executionMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Authentication_executionMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Authentication_executionCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Authentication_executionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authentication_execution to aggregate.
     */
    where?: authentication_executionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentication_executions to fetch.
     */
    orderBy?: authentication_executionOrderByWithRelationInput | authentication_executionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authentication_executionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentication_executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentication_executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authentication_executions
    **/
    _count?: true | Authentication_executionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Authentication_executionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Authentication_executionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Authentication_executionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Authentication_executionMaxAggregateInputType
  }

  export type GetAuthentication_executionAggregateType<T extends Authentication_executionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthentication_execution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthentication_execution[P]>
      : GetScalarType<T[P], AggregateAuthentication_execution[P]>
  }




  export type authentication_executionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authentication_executionWhereInput
    orderBy?: authentication_executionOrderByWithAggregationInput | authentication_executionOrderByWithAggregationInput[]
    by: Authentication_executionScalarFieldEnum[] | Authentication_executionScalarFieldEnum
    having?: authentication_executionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Authentication_executionCountAggregateInputType | true
    _avg?: Authentication_executionAvgAggregateInputType
    _sum?: Authentication_executionSumAggregateInputType
    _min?: Authentication_executionMinAggregateInputType
    _max?: Authentication_executionMaxAggregateInputType
  }

  export type Authentication_executionGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Authentication_executionCountAggregateOutputType | null
    _avg: Authentication_executionAvgAggregateOutputType | null
    _sum: Authentication_executionSumAggregateOutputType | null
    _min: Authentication_executionMinAggregateOutputType | null
    _max: Authentication_executionMaxAggregateOutputType | null
  }

  type GetAuthentication_executionGroupByPayload<T extends authentication_executionGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Authentication_executionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Authentication_executionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Authentication_executionGroupByOutputType[P]>
            : GetScalarType<T[P], Authentication_executionGroupByOutputType[P]>
        }
      >
    >


  export type authentication_executionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["authentication_execution"]>

  export type authentication_executionSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $authentication_executionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authentication_execution"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["authentication_execution"]>
    composites: {}
  }


  type authentication_executionGetPayload<S extends boolean | null | undefined | authentication_executionDefaultArgs> = $Result.GetResult<$authentication_executionPayload, S>

  type authentication_executionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<authentication_executionFindManyArgs, 'select' | 'include'> & {
      select?: Authentication_executionCountAggregateInputType | true
    }

  export interface authentication_executionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['authentication_execution'], meta: { name: 'authentication_execution' } }
    /**
     * Find zero or one Authentication_execution that matches the filter.
     * @param {authentication_executionFindUniqueArgs} args - Arguments to find a Authentication_execution
     * @example
     * // Get one Authentication_execution
     * const authentication_execution = await prisma.authentication_execution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends authentication_executionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, authentication_executionFindUniqueArgs<ExtArgs>>
    ): Prisma__authentication_executionClient<$Result.GetResult<$authentication_executionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Authentication_execution that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {authentication_executionFindUniqueOrThrowArgs} args - Arguments to find a Authentication_execution
     * @example
     * // Get one Authentication_execution
     * const authentication_execution = await prisma.authentication_execution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends authentication_executionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, authentication_executionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__authentication_executionClient<$Result.GetResult<$authentication_executionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Authentication_execution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentication_executionFindFirstArgs} args - Arguments to find a Authentication_execution
     * @example
     * // Get one Authentication_execution
     * const authentication_execution = await prisma.authentication_execution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends authentication_executionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, authentication_executionFindFirstArgs<ExtArgs>>
    ): Prisma__authentication_executionClient<$Result.GetResult<$authentication_executionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Authentication_execution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentication_executionFindFirstOrThrowArgs} args - Arguments to find a Authentication_execution
     * @example
     * // Get one Authentication_execution
     * const authentication_execution = await prisma.authentication_execution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends authentication_executionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, authentication_executionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__authentication_executionClient<$Result.GetResult<$authentication_executionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Authentication_executions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentication_executionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authentication_executions
     * const authentication_executions = await prisma.authentication_execution.findMany()
     * 
     * // Get first 10 Authentication_executions
     * const authentication_executions = await prisma.authentication_execution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authentication_executionWithIdOnly = await prisma.authentication_execution.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends authentication_executionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authentication_executionFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$authentication_executionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Authentication_execution.
     * @param {authentication_executionCreateArgs} args - Arguments to create a Authentication_execution.
     * @example
     * // Create one Authentication_execution
     * const Authentication_execution = await prisma.authentication_execution.create({
     *   data: {
     *     // ... data to create a Authentication_execution
     *   }
     * })
     * 
    **/
    create<T extends authentication_executionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, authentication_executionCreateArgs<ExtArgs>>
    ): Prisma__authentication_executionClient<$Result.GetResult<$authentication_executionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Authentication_executions.
     *     @param {authentication_executionCreateManyArgs} args - Arguments to create many Authentication_executions.
     *     @example
     *     // Create many Authentication_executions
     *     const authentication_execution = await prisma.authentication_execution.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends authentication_executionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authentication_executionCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Authentication_execution.
     * @param {authentication_executionDeleteArgs} args - Arguments to delete one Authentication_execution.
     * @example
     * // Delete one Authentication_execution
     * const Authentication_execution = await prisma.authentication_execution.delete({
     *   where: {
     *     // ... filter to delete one Authentication_execution
     *   }
     * })
     * 
    **/
    delete<T extends authentication_executionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, authentication_executionDeleteArgs<ExtArgs>>
    ): Prisma__authentication_executionClient<$Result.GetResult<$authentication_executionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Authentication_execution.
     * @param {authentication_executionUpdateArgs} args - Arguments to update one Authentication_execution.
     * @example
     * // Update one Authentication_execution
     * const authentication_execution = await prisma.authentication_execution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends authentication_executionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, authentication_executionUpdateArgs<ExtArgs>>
    ): Prisma__authentication_executionClient<$Result.GetResult<$authentication_executionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Authentication_executions.
     * @param {authentication_executionDeleteManyArgs} args - Arguments to filter Authentication_executions to delete.
     * @example
     * // Delete a few Authentication_executions
     * const { count } = await prisma.authentication_execution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends authentication_executionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authentication_executionDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentication_executions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentication_executionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authentication_executions
     * const authentication_execution = await prisma.authentication_execution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends authentication_executionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, authentication_executionUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Authentication_execution.
     * @param {authentication_executionUpsertArgs} args - Arguments to update or create a Authentication_execution.
     * @example
     * // Update or create a Authentication_execution
     * const authentication_execution = await prisma.authentication_execution.upsert({
     *   create: {
     *     // ... data to create a Authentication_execution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authentication_execution we want to update
     *   }
     * })
    **/
    upsert<T extends authentication_executionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, authentication_executionUpsertArgs<ExtArgs>>
    ): Prisma__authentication_executionClient<$Result.GetResult<$authentication_executionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Authentication_executions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentication_executionCountArgs} args - Arguments to filter Authentication_executions to count.
     * @example
     * // Count the number of Authentication_executions
     * const count = await prisma.authentication_execution.count({
     *   where: {
     *     // ... the filter for the Authentication_executions we want to count
     *   }
     * })
    **/
    count<T extends authentication_executionCountArgs>(
      args?: Subset<T, authentication_executionCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Authentication_executionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authentication_execution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Authentication_executionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Authentication_executionAggregateArgs>(args: Subset<T, Authentication_executionAggregateArgs>): PrismaPromise<GetAuthentication_executionAggregateType<T>>

    /**
     * Group by Authentication_execution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentication_executionGroupByArgs} args - Group by arguments.
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
      T extends authentication_executionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authentication_executionGroupByArgs['orderBy'] }
        : { orderBy?: authentication_executionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, authentication_executionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthentication_executionGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the authentication_execution model
   */
  readonly fields: authentication_executionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authentication_execution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authentication_executionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the authentication_execution model
   */ 
  interface authentication_executionFieldRefs {
    readonly id: FieldRef<"authentication_execution", 'Int'>
    readonly domain: FieldRef<"authentication_execution", 'String'>
    readonly props: FieldRef<"authentication_execution", 'Json'>
    readonly groups: FieldRef<"authentication_execution", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * authentication_execution findUnique
   */
  export type authentication_executionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_execution
     */
    select?: authentication_executionSelect<ExtArgs> | null
    /**
     * Filter, which authentication_execution to fetch.
     */
    where: authentication_executionWhereUniqueInput
  }


  /**
   * authentication_execution findUniqueOrThrow
   */
  export type authentication_executionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_execution
     */
    select?: authentication_executionSelect<ExtArgs> | null
    /**
     * Filter, which authentication_execution to fetch.
     */
    where: authentication_executionWhereUniqueInput
  }


  /**
   * authentication_execution findFirst
   */
  export type authentication_executionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_execution
     */
    select?: authentication_executionSelect<ExtArgs> | null
    /**
     * Filter, which authentication_execution to fetch.
     */
    where?: authentication_executionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentication_executions to fetch.
     */
    orderBy?: authentication_executionOrderByWithRelationInput | authentication_executionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authentication_executions.
     */
    cursor?: authentication_executionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentication_executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentication_executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authentication_executions.
     */
    distinct?: Authentication_executionScalarFieldEnum | Authentication_executionScalarFieldEnum[]
  }


  /**
   * authentication_execution findFirstOrThrow
   */
  export type authentication_executionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_execution
     */
    select?: authentication_executionSelect<ExtArgs> | null
    /**
     * Filter, which authentication_execution to fetch.
     */
    where?: authentication_executionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentication_executions to fetch.
     */
    orderBy?: authentication_executionOrderByWithRelationInput | authentication_executionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authentication_executions.
     */
    cursor?: authentication_executionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentication_executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentication_executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authentication_executions.
     */
    distinct?: Authentication_executionScalarFieldEnum | Authentication_executionScalarFieldEnum[]
  }


  /**
   * authentication_execution findMany
   */
  export type authentication_executionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_execution
     */
    select?: authentication_executionSelect<ExtArgs> | null
    /**
     * Filter, which authentication_executions to fetch.
     */
    where?: authentication_executionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentication_executions to fetch.
     */
    orderBy?: authentication_executionOrderByWithRelationInput | authentication_executionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authentication_executions.
     */
    cursor?: authentication_executionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentication_executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentication_executions.
     */
    skip?: number
    distinct?: Authentication_executionScalarFieldEnum | Authentication_executionScalarFieldEnum[]
  }


  /**
   * authentication_execution create
   */
  export type authentication_executionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_execution
     */
    select?: authentication_executionSelect<ExtArgs> | null
    /**
     * The data needed to create a authentication_execution.
     */
    data: XOR<authentication_executionCreateInput, authentication_executionUncheckedCreateInput>
  }


  /**
   * authentication_execution createMany
   */
  export type authentication_executionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authentication_executions.
     */
    data: authentication_executionCreateManyInput | authentication_executionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * authentication_execution update
   */
  export type authentication_executionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_execution
     */
    select?: authentication_executionSelect<ExtArgs> | null
    /**
     * The data needed to update a authentication_execution.
     */
    data: XOR<authentication_executionUpdateInput, authentication_executionUncheckedUpdateInput>
    /**
     * Choose, which authentication_execution to update.
     */
    where: authentication_executionWhereUniqueInput
  }


  /**
   * authentication_execution updateMany
   */
  export type authentication_executionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authentication_executions.
     */
    data: XOR<authentication_executionUpdateManyMutationInput, authentication_executionUncheckedUpdateManyInput>
    /**
     * Filter which authentication_executions to update
     */
    where?: authentication_executionWhereInput
  }


  /**
   * authentication_execution upsert
   */
  export type authentication_executionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_execution
     */
    select?: authentication_executionSelect<ExtArgs> | null
    /**
     * The filter to search for the authentication_execution to update in case it exists.
     */
    where: authentication_executionWhereUniqueInput
    /**
     * In case the authentication_execution found by the `where` argument doesn't exist, create a new authentication_execution with this data.
     */
    create: XOR<authentication_executionCreateInput, authentication_executionUncheckedCreateInput>
    /**
     * In case the authentication_execution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authentication_executionUpdateInput, authentication_executionUncheckedUpdateInput>
  }


  /**
   * authentication_execution delete
   */
  export type authentication_executionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_execution
     */
    select?: authentication_executionSelect<ExtArgs> | null
    /**
     * Filter which authentication_execution to delete.
     */
    where: authentication_executionWhereUniqueInput
  }


  /**
   * authentication_execution deleteMany
   */
  export type authentication_executionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authentication_executions to delete
     */
    where?: authentication_executionWhereInput
  }


  /**
   * authentication_execution without action
   */
  export type authentication_executionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_execution
     */
    select?: authentication_executionSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type authentication_executionWhereInput = {
    AND?: authentication_executionWhereInput | authentication_executionWhereInput[]
    OR?: authentication_executionWhereInput[]
    NOT?: authentication_executionWhereInput | authentication_executionWhereInput[]
    id?: IntFilter<"authentication_execution"> | number
    domain?: StringFilter<"authentication_execution"> | string
    props?: JsonFilter<"authentication_execution">
    groups?: JsonFilter<"authentication_execution">
  }

  export type authentication_executionOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type authentication_executionWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: authentication_executionWhereInput | authentication_executionWhereInput[]
    OR?: authentication_executionWhereInput[]
    NOT?: authentication_executionWhereInput | authentication_executionWhereInput[]
    props?: JsonFilter<"authentication_execution">
    groups?: JsonFilter<"authentication_execution">
  }, "id" | "domain">

  export type authentication_executionOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: authentication_executionCountOrderByAggregateInput
    _avg?: authentication_executionAvgOrderByAggregateInput
    _max?: authentication_executionMaxOrderByAggregateInput
    _min?: authentication_executionMinOrderByAggregateInput
    _sum?: authentication_executionSumOrderByAggregateInput
  }

  export type authentication_executionScalarWhereWithAggregatesInput = {
    AND?: authentication_executionScalarWhereWithAggregatesInput | authentication_executionScalarWhereWithAggregatesInput[]
    OR?: authentication_executionScalarWhereWithAggregatesInput[]
    NOT?: authentication_executionScalarWhereWithAggregatesInput | authentication_executionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"authentication_execution"> | number
    domain?: StringWithAggregatesFilter<"authentication_execution"> | string
    props?: JsonWithAggregatesFilter<"authentication_execution">
    groups?: JsonWithAggregatesFilter<"authentication_execution">
  }

  export type authentication_executionCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authentication_executionUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authentication_executionUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authentication_executionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authentication_executionCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authentication_executionUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authentication_executionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authentication_executionCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type authentication_executionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type authentication_executionMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type authentication_executionMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type authentication_executionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use authentication_executionDefaultArgs instead
     */
    export type authentication_executionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = authentication_executionDefaultArgs<ExtArgs>

    export const Authentication_executionScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Authentication_executionScalarFieldEnum = (typeof Authentication_executionScalarFieldEnum)[keyof typeof Authentication_executionScalarFieldEnum]
    