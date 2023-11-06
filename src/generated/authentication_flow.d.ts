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

export type authentication_flow = $Result.DefaultSelection<$authentication_flowPayload>


/**
   * Model authentication_flow
   */

export type AggregateAuthentication_flow = {
    _count: Authentication_flowCountAggregateOutputType | null
    _avg: Authentication_flowAvgAggregateOutputType | null
    _sum: Authentication_flowSumAggregateOutputType | null
    _min: Authentication_flowMinAggregateOutputType | null
    _max: Authentication_flowMaxAggregateOutputType | null
  }

  export type Authentication_flowAvgAggregateOutputType = {
    id: number | null
  }

  export type Authentication_flowSumAggregateOutputType = {
    id: number | null
  }

  export type Authentication_flowMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Authentication_flowMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Authentication_flowCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Authentication_flowAvgAggregateInputType = {
    id?: true
  }

  export type Authentication_flowSumAggregateInputType = {
    id?: true
  }

  export type Authentication_flowMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Authentication_flowMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Authentication_flowCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Authentication_flowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authentication_flow to aggregate.
     */
    where?: authentication_flowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentication_flows to fetch.
     */
    orderBy?: authentication_flowOrderByWithRelationInput | authentication_flowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authentication_flowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentication_flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentication_flows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authentication_flows
    **/
    _count?: true | Authentication_flowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Authentication_flowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Authentication_flowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Authentication_flowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Authentication_flowMaxAggregateInputType
  }

  export type GetAuthentication_flowAggregateType<T extends Authentication_flowAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthentication_flow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthentication_flow[P]>
      : GetScalarType<T[P], AggregateAuthentication_flow[P]>
  }




  export type authentication_flowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authentication_flowWhereInput
    orderBy?: authentication_flowOrderByWithAggregationInput | authentication_flowOrderByWithAggregationInput[]
    by: Authentication_flowScalarFieldEnum[] | Authentication_flowScalarFieldEnum
    having?: authentication_flowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Authentication_flowCountAggregateInputType | true
    _avg?: Authentication_flowAvgAggregateInputType
    _sum?: Authentication_flowSumAggregateInputType
    _min?: Authentication_flowMinAggregateInputType
    _max?: Authentication_flowMaxAggregateInputType
  }

  export type Authentication_flowGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Authentication_flowCountAggregateOutputType | null
    _avg: Authentication_flowAvgAggregateOutputType | null
    _sum: Authentication_flowSumAggregateOutputType | null
    _min: Authentication_flowMinAggregateOutputType | null
    _max: Authentication_flowMaxAggregateOutputType | null
  }

  type GetAuthentication_flowGroupByPayload<T extends authentication_flowGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Authentication_flowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Authentication_flowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Authentication_flowGroupByOutputType[P]>
            : GetScalarType<T[P], Authentication_flowGroupByOutputType[P]>
        }
      >
    >


  export type authentication_flowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["authentication_flow"]>

  export type authentication_flowSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $authentication_flowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authentication_flow"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["authentication_flow"]>
    composites: {}
  }


  type authentication_flowGetPayload<S extends boolean | null | undefined | authentication_flowDefaultArgs> = $Result.GetResult<$authentication_flowPayload, S>

  type authentication_flowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<authentication_flowFindManyArgs, 'select' | 'include'> & {
      select?: Authentication_flowCountAggregateInputType | true
    }

  export interface authentication_flowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['authentication_flow'], meta: { name: 'authentication_flow' } }
    /**
     * Find zero or one Authentication_flow that matches the filter.
     * @param {authentication_flowFindUniqueArgs} args - Arguments to find a Authentication_flow
     * @example
     * // Get one Authentication_flow
     * const authentication_flow = await prisma.authentication_flow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends authentication_flowFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, authentication_flowFindUniqueArgs<ExtArgs>>
    ): Prisma__authentication_flowClient<$Result.GetResult<$authentication_flowPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Authentication_flow that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {authentication_flowFindUniqueOrThrowArgs} args - Arguments to find a Authentication_flow
     * @example
     * // Get one Authentication_flow
     * const authentication_flow = await prisma.authentication_flow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends authentication_flowFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, authentication_flowFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__authentication_flowClient<$Result.GetResult<$authentication_flowPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Authentication_flow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentication_flowFindFirstArgs} args - Arguments to find a Authentication_flow
     * @example
     * // Get one Authentication_flow
     * const authentication_flow = await prisma.authentication_flow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends authentication_flowFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, authentication_flowFindFirstArgs<ExtArgs>>
    ): Prisma__authentication_flowClient<$Result.GetResult<$authentication_flowPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Authentication_flow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentication_flowFindFirstOrThrowArgs} args - Arguments to find a Authentication_flow
     * @example
     * // Get one Authentication_flow
     * const authentication_flow = await prisma.authentication_flow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends authentication_flowFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, authentication_flowFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__authentication_flowClient<$Result.GetResult<$authentication_flowPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Authentication_flows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentication_flowFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authentication_flows
     * const authentication_flows = await prisma.authentication_flow.findMany()
     * 
     * // Get first 10 Authentication_flows
     * const authentication_flows = await prisma.authentication_flow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authentication_flowWithIdOnly = await prisma.authentication_flow.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends authentication_flowFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authentication_flowFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$authentication_flowPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Authentication_flow.
     * @param {authentication_flowCreateArgs} args - Arguments to create a Authentication_flow.
     * @example
     * // Create one Authentication_flow
     * const Authentication_flow = await prisma.authentication_flow.create({
     *   data: {
     *     // ... data to create a Authentication_flow
     *   }
     * })
     * 
    **/
    create<T extends authentication_flowCreateArgs<ExtArgs>>(
      args: SelectSubset<T, authentication_flowCreateArgs<ExtArgs>>
    ): Prisma__authentication_flowClient<$Result.GetResult<$authentication_flowPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Authentication_flows.
     *     @param {authentication_flowCreateManyArgs} args - Arguments to create many Authentication_flows.
     *     @example
     *     // Create many Authentication_flows
     *     const authentication_flow = await prisma.authentication_flow.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends authentication_flowCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authentication_flowCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Authentication_flow.
     * @param {authentication_flowDeleteArgs} args - Arguments to delete one Authentication_flow.
     * @example
     * // Delete one Authentication_flow
     * const Authentication_flow = await prisma.authentication_flow.delete({
     *   where: {
     *     // ... filter to delete one Authentication_flow
     *   }
     * })
     * 
    **/
    delete<T extends authentication_flowDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, authentication_flowDeleteArgs<ExtArgs>>
    ): Prisma__authentication_flowClient<$Result.GetResult<$authentication_flowPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Authentication_flow.
     * @param {authentication_flowUpdateArgs} args - Arguments to update one Authentication_flow.
     * @example
     * // Update one Authentication_flow
     * const authentication_flow = await prisma.authentication_flow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends authentication_flowUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, authentication_flowUpdateArgs<ExtArgs>>
    ): Prisma__authentication_flowClient<$Result.GetResult<$authentication_flowPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Authentication_flows.
     * @param {authentication_flowDeleteManyArgs} args - Arguments to filter Authentication_flows to delete.
     * @example
     * // Delete a few Authentication_flows
     * const { count } = await prisma.authentication_flow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends authentication_flowDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authentication_flowDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentication_flows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentication_flowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authentication_flows
     * const authentication_flow = await prisma.authentication_flow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends authentication_flowUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, authentication_flowUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Authentication_flow.
     * @param {authentication_flowUpsertArgs} args - Arguments to update or create a Authentication_flow.
     * @example
     * // Update or create a Authentication_flow
     * const authentication_flow = await prisma.authentication_flow.upsert({
     *   create: {
     *     // ... data to create a Authentication_flow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authentication_flow we want to update
     *   }
     * })
    **/
    upsert<T extends authentication_flowUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, authentication_flowUpsertArgs<ExtArgs>>
    ): Prisma__authentication_flowClient<$Result.GetResult<$authentication_flowPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Authentication_flows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentication_flowCountArgs} args - Arguments to filter Authentication_flows to count.
     * @example
     * // Count the number of Authentication_flows
     * const count = await prisma.authentication_flow.count({
     *   where: {
     *     // ... the filter for the Authentication_flows we want to count
     *   }
     * })
    **/
    count<T extends authentication_flowCountArgs>(
      args?: Subset<T, authentication_flowCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Authentication_flowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authentication_flow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Authentication_flowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Authentication_flowAggregateArgs>(args: Subset<T, Authentication_flowAggregateArgs>): PrismaPromise<GetAuthentication_flowAggregateType<T>>

    /**
     * Group by Authentication_flow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentication_flowGroupByArgs} args - Group by arguments.
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
      T extends authentication_flowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authentication_flowGroupByArgs['orderBy'] }
        : { orderBy?: authentication_flowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, authentication_flowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthentication_flowGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the authentication_flow model
   */
  readonly fields: authentication_flowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authentication_flow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authentication_flowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the authentication_flow model
   */ 
  interface authentication_flowFieldRefs {
    readonly id: FieldRef<"authentication_flow", 'Int'>
    readonly domain: FieldRef<"authentication_flow", 'String'>
    readonly props: FieldRef<"authentication_flow", 'Json'>
    readonly groups: FieldRef<"authentication_flow", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * authentication_flow findUnique
   */
  export type authentication_flowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_flow
     */
    select?: authentication_flowSelect<ExtArgs> | null
    /**
     * Filter, which authentication_flow to fetch.
     */
    where: authentication_flowWhereUniqueInput
  }


  /**
   * authentication_flow findUniqueOrThrow
   */
  export type authentication_flowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_flow
     */
    select?: authentication_flowSelect<ExtArgs> | null
    /**
     * Filter, which authentication_flow to fetch.
     */
    where: authentication_flowWhereUniqueInput
  }


  /**
   * authentication_flow findFirst
   */
  export type authentication_flowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_flow
     */
    select?: authentication_flowSelect<ExtArgs> | null
    /**
     * Filter, which authentication_flow to fetch.
     */
    where?: authentication_flowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentication_flows to fetch.
     */
    orderBy?: authentication_flowOrderByWithRelationInput | authentication_flowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authentication_flows.
     */
    cursor?: authentication_flowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentication_flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentication_flows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authentication_flows.
     */
    distinct?: Authentication_flowScalarFieldEnum | Authentication_flowScalarFieldEnum[]
  }


  /**
   * authentication_flow findFirstOrThrow
   */
  export type authentication_flowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_flow
     */
    select?: authentication_flowSelect<ExtArgs> | null
    /**
     * Filter, which authentication_flow to fetch.
     */
    where?: authentication_flowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentication_flows to fetch.
     */
    orderBy?: authentication_flowOrderByWithRelationInput | authentication_flowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authentication_flows.
     */
    cursor?: authentication_flowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentication_flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentication_flows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authentication_flows.
     */
    distinct?: Authentication_flowScalarFieldEnum | Authentication_flowScalarFieldEnum[]
  }


  /**
   * authentication_flow findMany
   */
  export type authentication_flowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_flow
     */
    select?: authentication_flowSelect<ExtArgs> | null
    /**
     * Filter, which authentication_flows to fetch.
     */
    where?: authentication_flowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentication_flows to fetch.
     */
    orderBy?: authentication_flowOrderByWithRelationInput | authentication_flowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authentication_flows.
     */
    cursor?: authentication_flowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentication_flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentication_flows.
     */
    skip?: number
    distinct?: Authentication_flowScalarFieldEnum | Authentication_flowScalarFieldEnum[]
  }


  /**
   * authentication_flow create
   */
  export type authentication_flowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_flow
     */
    select?: authentication_flowSelect<ExtArgs> | null
    /**
     * The data needed to create a authentication_flow.
     */
    data: XOR<authentication_flowCreateInput, authentication_flowUncheckedCreateInput>
  }


  /**
   * authentication_flow createMany
   */
  export type authentication_flowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authentication_flows.
     */
    data: authentication_flowCreateManyInput | authentication_flowCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * authentication_flow update
   */
  export type authentication_flowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_flow
     */
    select?: authentication_flowSelect<ExtArgs> | null
    /**
     * The data needed to update a authentication_flow.
     */
    data: XOR<authentication_flowUpdateInput, authentication_flowUncheckedUpdateInput>
    /**
     * Choose, which authentication_flow to update.
     */
    where: authentication_flowWhereUniqueInput
  }


  /**
   * authentication_flow updateMany
   */
  export type authentication_flowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authentication_flows.
     */
    data: XOR<authentication_flowUpdateManyMutationInput, authentication_flowUncheckedUpdateManyInput>
    /**
     * Filter which authentication_flows to update
     */
    where?: authentication_flowWhereInput
  }


  /**
   * authentication_flow upsert
   */
  export type authentication_flowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_flow
     */
    select?: authentication_flowSelect<ExtArgs> | null
    /**
     * The filter to search for the authentication_flow to update in case it exists.
     */
    where: authentication_flowWhereUniqueInput
    /**
     * In case the authentication_flow found by the `where` argument doesn't exist, create a new authentication_flow with this data.
     */
    create: XOR<authentication_flowCreateInput, authentication_flowUncheckedCreateInput>
    /**
     * In case the authentication_flow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authentication_flowUpdateInput, authentication_flowUncheckedUpdateInput>
  }


  /**
   * authentication_flow delete
   */
  export type authentication_flowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_flow
     */
    select?: authentication_flowSelect<ExtArgs> | null
    /**
     * Filter which authentication_flow to delete.
     */
    where: authentication_flowWhereUniqueInput
  }


  /**
   * authentication_flow deleteMany
   */
  export type authentication_flowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authentication_flows to delete
     */
    where?: authentication_flowWhereInput
  }


  /**
   * authentication_flow without action
   */
  export type authentication_flowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication_flow
     */
    select?: authentication_flowSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type authentication_flowWhereInput = {
    AND?: authentication_flowWhereInput | authentication_flowWhereInput[]
    OR?: authentication_flowWhereInput[]
    NOT?: authentication_flowWhereInput | authentication_flowWhereInput[]
    id?: IntFilter<"authentication_flow"> | number
    domain?: StringFilter<"authentication_flow"> | string
    props?: JsonFilter<"authentication_flow">
    groups?: JsonFilter<"authentication_flow">
  }

  export type authentication_flowOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type authentication_flowWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: authentication_flowWhereInput | authentication_flowWhereInput[]
    OR?: authentication_flowWhereInput[]
    NOT?: authentication_flowWhereInput | authentication_flowWhereInput[]
    props?: JsonFilter<"authentication_flow">
    groups?: JsonFilter<"authentication_flow">
  }, "id" | "domain">

  export type authentication_flowOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: authentication_flowCountOrderByAggregateInput
    _avg?: authentication_flowAvgOrderByAggregateInput
    _max?: authentication_flowMaxOrderByAggregateInput
    _min?: authentication_flowMinOrderByAggregateInput
    _sum?: authentication_flowSumOrderByAggregateInput
  }

  export type authentication_flowScalarWhereWithAggregatesInput = {
    AND?: authentication_flowScalarWhereWithAggregatesInput | authentication_flowScalarWhereWithAggregatesInput[]
    OR?: authentication_flowScalarWhereWithAggregatesInput[]
    NOT?: authentication_flowScalarWhereWithAggregatesInput | authentication_flowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"authentication_flow"> | number
    domain?: StringWithAggregatesFilter<"authentication_flow"> | string
    props?: JsonWithAggregatesFilter<"authentication_flow">
    groups?: JsonWithAggregatesFilter<"authentication_flow">
  }

  export type authentication_flowCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authentication_flowUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authentication_flowUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authentication_flowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authentication_flowCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authentication_flowUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authentication_flowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authentication_flowCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type authentication_flowAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type authentication_flowMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type authentication_flowMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type authentication_flowSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use authentication_flowDefaultArgs instead
     */
    export type authentication_flowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = authentication_flowDefaultArgs<ExtArgs>

    export const Authentication_flowScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Authentication_flowScalarFieldEnum = (typeof Authentication_flowScalarFieldEnum)[keyof typeof Authentication_flowScalarFieldEnum]
    