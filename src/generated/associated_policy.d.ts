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

export type associated_policy = $Result.DefaultSelection<$associated_policyPayload>


/**
   * Model associated_policy
   */

export type AggregateAssociated_policy = {
    _count: Associated_policyCountAggregateOutputType | null
    _avg: Associated_policyAvgAggregateOutputType | null
    _sum: Associated_policySumAggregateOutputType | null
    _min: Associated_policyMinAggregateOutputType | null
    _max: Associated_policyMaxAggregateOutputType | null
  }

  export type Associated_policyAvgAggregateOutputType = {
    id: number | null
  }

  export type Associated_policySumAggregateOutputType = {
    id: number | null
  }

  export type Associated_policyMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Associated_policyMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Associated_policyCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Associated_policyAvgAggregateInputType = {
    id?: true
  }

  export type Associated_policySumAggregateInputType = {
    id?: true
  }

  export type Associated_policyMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Associated_policyMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Associated_policyCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Associated_policyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which associated_policy to aggregate.
     */
    where?: associated_policyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of associated_policys to fetch.
     */
    orderBy?: associated_policyOrderByWithRelationInput | associated_policyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: associated_policyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` associated_policys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` associated_policys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned associated_policys
    **/
    _count?: true | Associated_policyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Associated_policyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Associated_policySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Associated_policyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Associated_policyMaxAggregateInputType
  }

  export type GetAssociated_policyAggregateType<T extends Associated_policyAggregateArgs> = {
        [P in keyof T & keyof AggregateAssociated_policy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssociated_policy[P]>
      : GetScalarType<T[P], AggregateAssociated_policy[P]>
  }




  export type associated_policyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: associated_policyWhereInput
    orderBy?: associated_policyOrderByWithAggregationInput | associated_policyOrderByWithAggregationInput[]
    by: Associated_policyScalarFieldEnum[] | Associated_policyScalarFieldEnum
    having?: associated_policyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Associated_policyCountAggregateInputType | true
    _avg?: Associated_policyAvgAggregateInputType
    _sum?: Associated_policySumAggregateInputType
    _min?: Associated_policyMinAggregateInputType
    _max?: Associated_policyMaxAggregateInputType
  }

  export type Associated_policyGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Associated_policyCountAggregateOutputType | null
    _avg: Associated_policyAvgAggregateOutputType | null
    _sum: Associated_policySumAggregateOutputType | null
    _min: Associated_policyMinAggregateOutputType | null
    _max: Associated_policyMaxAggregateOutputType | null
  }

  type GetAssociated_policyGroupByPayload<T extends associated_policyGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Associated_policyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Associated_policyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Associated_policyGroupByOutputType[P]>
            : GetScalarType<T[P], Associated_policyGroupByOutputType[P]>
        }
      >
    >


  export type associated_policySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["associated_policy"]>

  export type associated_policySelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $associated_policyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "associated_policy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["associated_policy"]>
    composites: {}
  }


  type associated_policyGetPayload<S extends boolean | null | undefined | associated_policyDefaultArgs> = $Result.GetResult<$associated_policyPayload, S>

  type associated_policyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<associated_policyFindManyArgs, 'select' | 'include'> & {
      select?: Associated_policyCountAggregateInputType | true
    }

  export interface associated_policyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['associated_policy'], meta: { name: 'associated_policy' } }
    /**
     * Find zero or one Associated_policy that matches the filter.
     * @param {associated_policyFindUniqueArgs} args - Arguments to find a Associated_policy
     * @example
     * // Get one Associated_policy
     * const associated_policy = await prisma.associated_policy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends associated_policyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, associated_policyFindUniqueArgs<ExtArgs>>
    ): Prisma__associated_policyClient<$Result.GetResult<$associated_policyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Associated_policy that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {associated_policyFindUniqueOrThrowArgs} args - Arguments to find a Associated_policy
     * @example
     * // Get one Associated_policy
     * const associated_policy = await prisma.associated_policy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends associated_policyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, associated_policyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__associated_policyClient<$Result.GetResult<$associated_policyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Associated_policy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {associated_policyFindFirstArgs} args - Arguments to find a Associated_policy
     * @example
     * // Get one Associated_policy
     * const associated_policy = await prisma.associated_policy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends associated_policyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, associated_policyFindFirstArgs<ExtArgs>>
    ): Prisma__associated_policyClient<$Result.GetResult<$associated_policyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Associated_policy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {associated_policyFindFirstOrThrowArgs} args - Arguments to find a Associated_policy
     * @example
     * // Get one Associated_policy
     * const associated_policy = await prisma.associated_policy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends associated_policyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, associated_policyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__associated_policyClient<$Result.GetResult<$associated_policyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Associated_policys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {associated_policyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Associated_policys
     * const associated_policys = await prisma.associated_policy.findMany()
     * 
     * // Get first 10 Associated_policys
     * const associated_policys = await prisma.associated_policy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const associated_policyWithIdOnly = await prisma.associated_policy.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends associated_policyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, associated_policyFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$associated_policyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Associated_policy.
     * @param {associated_policyCreateArgs} args - Arguments to create a Associated_policy.
     * @example
     * // Create one Associated_policy
     * const Associated_policy = await prisma.associated_policy.create({
     *   data: {
     *     // ... data to create a Associated_policy
     *   }
     * })
     * 
    **/
    create<T extends associated_policyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, associated_policyCreateArgs<ExtArgs>>
    ): Prisma__associated_policyClient<$Result.GetResult<$associated_policyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Associated_policys.
     *     @param {associated_policyCreateManyArgs} args - Arguments to create many Associated_policys.
     *     @example
     *     // Create many Associated_policys
     *     const associated_policy = await prisma.associated_policy.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends associated_policyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, associated_policyCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Associated_policy.
     * @param {associated_policyDeleteArgs} args - Arguments to delete one Associated_policy.
     * @example
     * // Delete one Associated_policy
     * const Associated_policy = await prisma.associated_policy.delete({
     *   where: {
     *     // ... filter to delete one Associated_policy
     *   }
     * })
     * 
    **/
    delete<T extends associated_policyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, associated_policyDeleteArgs<ExtArgs>>
    ): Prisma__associated_policyClient<$Result.GetResult<$associated_policyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Associated_policy.
     * @param {associated_policyUpdateArgs} args - Arguments to update one Associated_policy.
     * @example
     * // Update one Associated_policy
     * const associated_policy = await prisma.associated_policy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends associated_policyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, associated_policyUpdateArgs<ExtArgs>>
    ): Prisma__associated_policyClient<$Result.GetResult<$associated_policyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Associated_policys.
     * @param {associated_policyDeleteManyArgs} args - Arguments to filter Associated_policys to delete.
     * @example
     * // Delete a few Associated_policys
     * const { count } = await prisma.associated_policy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends associated_policyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, associated_policyDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Associated_policys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {associated_policyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Associated_policys
     * const associated_policy = await prisma.associated_policy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends associated_policyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, associated_policyUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Associated_policy.
     * @param {associated_policyUpsertArgs} args - Arguments to update or create a Associated_policy.
     * @example
     * // Update or create a Associated_policy
     * const associated_policy = await prisma.associated_policy.upsert({
     *   create: {
     *     // ... data to create a Associated_policy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Associated_policy we want to update
     *   }
     * })
    **/
    upsert<T extends associated_policyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, associated_policyUpsertArgs<ExtArgs>>
    ): Prisma__associated_policyClient<$Result.GetResult<$associated_policyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Associated_policys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {associated_policyCountArgs} args - Arguments to filter Associated_policys to count.
     * @example
     * // Count the number of Associated_policys
     * const count = await prisma.associated_policy.count({
     *   where: {
     *     // ... the filter for the Associated_policys we want to count
     *   }
     * })
    **/
    count<T extends associated_policyCountArgs>(
      args?: Subset<T, associated_policyCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Associated_policyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Associated_policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Associated_policyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Associated_policyAggregateArgs>(args: Subset<T, Associated_policyAggregateArgs>): PrismaPromise<GetAssociated_policyAggregateType<T>>

    /**
     * Group by Associated_policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {associated_policyGroupByArgs} args - Group by arguments.
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
      T extends associated_policyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: associated_policyGroupByArgs['orderBy'] }
        : { orderBy?: associated_policyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, associated_policyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssociated_policyGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the associated_policy model
   */
  readonly fields: associated_policyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for associated_policy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__associated_policyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the associated_policy model
   */ 
  interface associated_policyFieldRefs {
    readonly id: FieldRef<"associated_policy", 'Int'>
    readonly domain: FieldRef<"associated_policy", 'String'>
    readonly props: FieldRef<"associated_policy", 'Json'>
    readonly groups: FieldRef<"associated_policy", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * associated_policy findUnique
   */
  export type associated_policyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associated_policy
     */
    select?: associated_policySelect<ExtArgs> | null
    /**
     * Filter, which associated_policy to fetch.
     */
    where: associated_policyWhereUniqueInput
  }


  /**
   * associated_policy findUniqueOrThrow
   */
  export type associated_policyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associated_policy
     */
    select?: associated_policySelect<ExtArgs> | null
    /**
     * Filter, which associated_policy to fetch.
     */
    where: associated_policyWhereUniqueInput
  }


  /**
   * associated_policy findFirst
   */
  export type associated_policyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associated_policy
     */
    select?: associated_policySelect<ExtArgs> | null
    /**
     * Filter, which associated_policy to fetch.
     */
    where?: associated_policyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of associated_policys to fetch.
     */
    orderBy?: associated_policyOrderByWithRelationInput | associated_policyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for associated_policys.
     */
    cursor?: associated_policyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` associated_policys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` associated_policys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of associated_policys.
     */
    distinct?: Associated_policyScalarFieldEnum | Associated_policyScalarFieldEnum[]
  }


  /**
   * associated_policy findFirstOrThrow
   */
  export type associated_policyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associated_policy
     */
    select?: associated_policySelect<ExtArgs> | null
    /**
     * Filter, which associated_policy to fetch.
     */
    where?: associated_policyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of associated_policys to fetch.
     */
    orderBy?: associated_policyOrderByWithRelationInput | associated_policyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for associated_policys.
     */
    cursor?: associated_policyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` associated_policys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` associated_policys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of associated_policys.
     */
    distinct?: Associated_policyScalarFieldEnum | Associated_policyScalarFieldEnum[]
  }


  /**
   * associated_policy findMany
   */
  export type associated_policyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associated_policy
     */
    select?: associated_policySelect<ExtArgs> | null
    /**
     * Filter, which associated_policys to fetch.
     */
    where?: associated_policyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of associated_policys to fetch.
     */
    orderBy?: associated_policyOrderByWithRelationInput | associated_policyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing associated_policys.
     */
    cursor?: associated_policyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` associated_policys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` associated_policys.
     */
    skip?: number
    distinct?: Associated_policyScalarFieldEnum | Associated_policyScalarFieldEnum[]
  }


  /**
   * associated_policy create
   */
  export type associated_policyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associated_policy
     */
    select?: associated_policySelect<ExtArgs> | null
    /**
     * The data needed to create a associated_policy.
     */
    data: XOR<associated_policyCreateInput, associated_policyUncheckedCreateInput>
  }


  /**
   * associated_policy createMany
   */
  export type associated_policyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many associated_policys.
     */
    data: associated_policyCreateManyInput | associated_policyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * associated_policy update
   */
  export type associated_policyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associated_policy
     */
    select?: associated_policySelect<ExtArgs> | null
    /**
     * The data needed to update a associated_policy.
     */
    data: XOR<associated_policyUpdateInput, associated_policyUncheckedUpdateInput>
    /**
     * Choose, which associated_policy to update.
     */
    where: associated_policyWhereUniqueInput
  }


  /**
   * associated_policy updateMany
   */
  export type associated_policyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update associated_policys.
     */
    data: XOR<associated_policyUpdateManyMutationInput, associated_policyUncheckedUpdateManyInput>
    /**
     * Filter which associated_policys to update
     */
    where?: associated_policyWhereInput
  }


  /**
   * associated_policy upsert
   */
  export type associated_policyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associated_policy
     */
    select?: associated_policySelect<ExtArgs> | null
    /**
     * The filter to search for the associated_policy to update in case it exists.
     */
    where: associated_policyWhereUniqueInput
    /**
     * In case the associated_policy found by the `where` argument doesn't exist, create a new associated_policy with this data.
     */
    create: XOR<associated_policyCreateInput, associated_policyUncheckedCreateInput>
    /**
     * In case the associated_policy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<associated_policyUpdateInput, associated_policyUncheckedUpdateInput>
  }


  /**
   * associated_policy delete
   */
  export type associated_policyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associated_policy
     */
    select?: associated_policySelect<ExtArgs> | null
    /**
     * Filter which associated_policy to delete.
     */
    where: associated_policyWhereUniqueInput
  }


  /**
   * associated_policy deleteMany
   */
  export type associated_policyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which associated_policys to delete
     */
    where?: associated_policyWhereInput
  }


  /**
   * associated_policy without action
   */
  export type associated_policyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the associated_policy
     */
    select?: associated_policySelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type associated_policyWhereInput = {
    AND?: associated_policyWhereInput | associated_policyWhereInput[]
    OR?: associated_policyWhereInput[]
    NOT?: associated_policyWhereInput | associated_policyWhereInput[]
    id?: IntFilter<"associated_policy"> | number
    domain?: StringFilter<"associated_policy"> | string
    props?: JsonFilter<"associated_policy">
    groups?: JsonFilter<"associated_policy">
  }

  export type associated_policyOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type associated_policyWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: associated_policyWhereInput | associated_policyWhereInput[]
    OR?: associated_policyWhereInput[]
    NOT?: associated_policyWhereInput | associated_policyWhereInput[]
    props?: JsonFilter<"associated_policy">
    groups?: JsonFilter<"associated_policy">
  }, "id" | "domain">

  export type associated_policyOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: associated_policyCountOrderByAggregateInput
    _avg?: associated_policyAvgOrderByAggregateInput
    _max?: associated_policyMaxOrderByAggregateInput
    _min?: associated_policyMinOrderByAggregateInput
    _sum?: associated_policySumOrderByAggregateInput
  }

  export type associated_policyScalarWhereWithAggregatesInput = {
    AND?: associated_policyScalarWhereWithAggregatesInput | associated_policyScalarWhereWithAggregatesInput[]
    OR?: associated_policyScalarWhereWithAggregatesInput[]
    NOT?: associated_policyScalarWhereWithAggregatesInput | associated_policyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"associated_policy"> | number
    domain?: StringWithAggregatesFilter<"associated_policy"> | string
    props?: JsonWithAggregatesFilter<"associated_policy">
    groups?: JsonWithAggregatesFilter<"associated_policy">
  }

  export type associated_policyCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type associated_policyUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type associated_policyUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type associated_policyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type associated_policyCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type associated_policyUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type associated_policyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type associated_policyCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type associated_policyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type associated_policyMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type associated_policyMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type associated_policySumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use associated_policyDefaultArgs instead
     */
    export type associated_policyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = associated_policyDefaultArgs<ExtArgs>

    export const Associated_policyScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Associated_policyScalarFieldEnum = (typeof Associated_policyScalarFieldEnum)[keyof typeof Associated_policyScalarFieldEnum]
    