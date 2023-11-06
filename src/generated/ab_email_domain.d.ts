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


 } from "./utils"


export type ab_email_domain = $Result.DefaultSelection<$ab_email_domainPayload>


/**
   * Model ab_email_domain
   */

export type AggregateAb_email_domain = {
    _count: Ab_email_domainCountAggregateOutputType | null
    _avg: Ab_email_domainAvgAggregateOutputType | null
    _sum: Ab_email_domainSumAggregateOutputType | null
    _min: Ab_email_domainMinAggregateOutputType | null
    _max: Ab_email_domainMaxAggregateOutputType | null
  }

  export type Ab_email_domainAvgAggregateOutputType = {
    id: number | null
  }

  export type Ab_email_domainSumAggregateOutputType = {
    id: number | null
  }

  export type Ab_email_domainMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Ab_email_domainMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Ab_email_domainCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Ab_email_domainAvgAggregateInputType = {
    id?: true
  }

  export type Ab_email_domainSumAggregateInputType = {
    id?: true
  }

  export type Ab_email_domainMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Ab_email_domainMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Ab_email_domainCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Ab_email_domainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ab_email_domain to aggregate.
     */
    where?: ab_email_domainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_email_domains to fetch.
     */
    orderBy?: ab_email_domainOrderByWithRelationInput | ab_email_domainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ab_email_domainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_email_domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_email_domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ab_email_domains
    **/
    _count?: true | Ab_email_domainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ab_email_domainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ab_email_domainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ab_email_domainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ab_email_domainMaxAggregateInputType
  }

  export type GetAb_email_domainAggregateType<T extends Ab_email_domainAggregateArgs> = {
        [P in keyof T & keyof AggregateAb_email_domain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAb_email_domain[P]>
      : GetScalarType<T[P], AggregateAb_email_domain[P]>
  }




  export type ab_email_domainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ab_email_domainWhereInput
    orderBy?: ab_email_domainOrderByWithAggregationInput | ab_email_domainOrderByWithAggregationInput[]
    by: Ab_email_domainScalarFieldEnum[] | Ab_email_domainScalarFieldEnum
    having?: ab_email_domainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ab_email_domainCountAggregateInputType | true
    _avg?: Ab_email_domainAvgAggregateInputType
    _sum?: Ab_email_domainSumAggregateInputType
    _min?: Ab_email_domainMinAggregateInputType
    _max?: Ab_email_domainMaxAggregateInputType
  }

  export type Ab_email_domainGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Ab_email_domainCountAggregateOutputType | null
    _avg: Ab_email_domainAvgAggregateOutputType | null
    _sum: Ab_email_domainSumAggregateOutputType | null
    _min: Ab_email_domainMinAggregateOutputType | null
    _max: Ab_email_domainMaxAggregateOutputType | null
  }

  type GetAb_email_domainGroupByPayload<T extends ab_email_domainGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Ab_email_domainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ab_email_domainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ab_email_domainGroupByOutputType[P]>
            : GetScalarType<T[P], Ab_email_domainGroupByOutputType[P]>
        }
      >
    >


  export type ab_email_domainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["ab_email_domain"]>

  export type ab_email_domainSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $ab_email_domainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ab_email_domain"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["ab_email_domain"]>
    composites: {}
  }


  type ab_email_domainGetPayload<S extends boolean | null | undefined | ab_email_domainDefaultArgs> = $Result.GetResult<$ab_email_domainPayload, S>

  type ab_email_domainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ab_email_domainFindManyArgs, 'select' | 'include'> & {
      select?: Ab_email_domainCountAggregateInputType | true
    }

  export interface ab_email_domainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['ab_email_domain'], meta: { name: 'ab_email_domain' } }
    /**
     * Find zero or one Ab_email_domain that matches the filter.
     * @param {ab_email_domainFindUniqueArgs} args - Arguments to find a Ab_email_domain
     * @example
     * // Get one Ab_email_domain
     * const ab_email_domain = await prisma.ab_email_domain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ab_email_domainFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ab_email_domainFindUniqueArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ab_email_domain that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ab_email_domainFindUniqueOrThrowArgs} args - Arguments to find a Ab_email_domain
     * @example
     * // Get one Ab_email_domain
     * const ab_email_domain = await prisma.ab_email_domain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ab_email_domainFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_email_domainFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ab_email_domain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_email_domainFindFirstArgs} args - Arguments to find a Ab_email_domain
     * @example
     * // Get one Ab_email_domain
     * const ab_email_domain = await prisma.ab_email_domain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ab_email_domainFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_email_domainFindFirstArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ab_email_domain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_email_domainFindFirstOrThrowArgs} args - Arguments to find a Ab_email_domain
     * @example
     * // Get one Ab_email_domain
     * const ab_email_domain = await prisma.ab_email_domain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ab_email_domainFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_email_domainFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ab_email_domains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_email_domainFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ab_email_domains
     * const ab_email_domains = await prisma.ab_email_domain.findMany()
     * 
     * // Get first 10 Ab_email_domains
     * const ab_email_domains = await prisma.ab_email_domain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ab_email_domainWithIdOnly = await prisma.ab_email_domain.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ab_email_domainFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_email_domainFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ab_email_domain.
     * @param {ab_email_domainCreateArgs} args - Arguments to create a Ab_email_domain.
     * @example
     * // Create one Ab_email_domain
     * const Ab_email_domain = await prisma.ab_email_domain.create({
     *   data: {
     *     // ... data to create a Ab_email_domain
     *   }
     * })
     * 
    **/
    create<T extends ab_email_domainCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ab_email_domainCreateArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ab_email_domains.
     *     @param {ab_email_domainCreateManyArgs} args - Arguments to create many Ab_email_domains.
     *     @example
     *     // Create many Ab_email_domains
     *     const ab_email_domain = await prisma.ab_email_domain.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ab_email_domainCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_email_domainCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ab_email_domain.
     * @param {ab_email_domainDeleteArgs} args - Arguments to delete one Ab_email_domain.
     * @example
     * // Delete one Ab_email_domain
     * const Ab_email_domain = await prisma.ab_email_domain.delete({
     *   where: {
     *     // ... filter to delete one Ab_email_domain
     *   }
     * })
     * 
    **/
    delete<T extends ab_email_domainDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ab_email_domainDeleteArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ab_email_domain.
     * @param {ab_email_domainUpdateArgs} args - Arguments to update one Ab_email_domain.
     * @example
     * // Update one Ab_email_domain
     * const ab_email_domain = await prisma.ab_email_domain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ab_email_domainUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ab_email_domainUpdateArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ab_email_domains.
     * @param {ab_email_domainDeleteManyArgs} args - Arguments to filter Ab_email_domains to delete.
     * @example
     * // Delete a few Ab_email_domains
     * const { count } = await prisma.ab_email_domain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ab_email_domainDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_email_domainDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ab_email_domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_email_domainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ab_email_domains
     * const ab_email_domain = await prisma.ab_email_domain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ab_email_domainUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ab_email_domainUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ab_email_domain.
     * @param {ab_email_domainUpsertArgs} args - Arguments to update or create a Ab_email_domain.
     * @example
     * // Update or create a Ab_email_domain
     * const ab_email_domain = await prisma.ab_email_domain.upsert({
     *   create: {
     *     // ... data to create a Ab_email_domain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ab_email_domain we want to update
     *   }
     * })
    **/
    upsert<T extends ab_email_domainUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ab_email_domainUpsertArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ab_email_domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_email_domainCountArgs} args - Arguments to filter Ab_email_domains to count.
     * @example
     * // Count the number of Ab_email_domains
     * const count = await prisma.ab_email_domain.count({
     *   where: {
     *     // ... the filter for the Ab_email_domains we want to count
     *   }
     * })
    **/
    count<T extends ab_email_domainCountArgs>(
      args?: Subset<T, ab_email_domainCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ab_email_domainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ab_email_domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ab_email_domainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ab_email_domainAggregateArgs>(args: Subset<T, Ab_email_domainAggregateArgs>): PrismaPromise<GetAb_email_domainAggregateType<T>>

    /**
     * Group by Ab_email_domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_email_domainGroupByArgs} args - Group by arguments.
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
      T extends ab_email_domainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ab_email_domainGroupByArgs['orderBy'] }
        : { orderBy?: ab_email_domainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ab_email_domainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAb_email_domainGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the ab_email_domain model
   */
  readonly fields: ab_email_domainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ab_email_domain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ab_email_domainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the ab_email_domain model
   */ 
  interface ab_email_domainFieldRefs {
    readonly id: FieldRef<"ab_email_domain", 'Int'>
    readonly domain: FieldRef<"ab_email_domain", 'String'>
    readonly props: FieldRef<"ab_email_domain", 'Json'>
    readonly groups: FieldRef<"ab_email_domain", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * ab_email_domain findUnique
   */
  export type ab_email_domainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_email_domain
     */
    select?: ab_email_domainSelect<ExtArgs> | null
    /**
     * Filter, which ab_email_domain to fetch.
     */
    where: ab_email_domainWhereUniqueInput
  }


  /**
   * ab_email_domain findUniqueOrThrow
   */
  export type ab_email_domainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_email_domain
     */
    select?: ab_email_domainSelect<ExtArgs> | null
    /**
     * Filter, which ab_email_domain to fetch.
     */
    where: ab_email_domainWhereUniqueInput
  }


  /**
   * ab_email_domain findFirst
   */
  export type ab_email_domainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_email_domain
     */
    select?: ab_email_domainSelect<ExtArgs> | null
    /**
     * Filter, which ab_email_domain to fetch.
     */
    where?: ab_email_domainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_email_domains to fetch.
     */
    orderBy?: ab_email_domainOrderByWithRelationInput | ab_email_domainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ab_email_domains.
     */
    cursor?: ab_email_domainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_email_domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_email_domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ab_email_domains.
     */
    distinct?: Ab_email_domainScalarFieldEnum | Ab_email_domainScalarFieldEnum[]
  }


  /**
   * ab_email_domain findFirstOrThrow
   */
  export type ab_email_domainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_email_domain
     */
    select?: ab_email_domainSelect<ExtArgs> | null
    /**
     * Filter, which ab_email_domain to fetch.
     */
    where?: ab_email_domainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_email_domains to fetch.
     */
    orderBy?: ab_email_domainOrderByWithRelationInput | ab_email_domainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ab_email_domains.
     */
    cursor?: ab_email_domainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_email_domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_email_domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ab_email_domains.
     */
    distinct?: Ab_email_domainScalarFieldEnum | Ab_email_domainScalarFieldEnum[]
  }


  /**
   * ab_email_domain findMany
   */
  export type ab_email_domainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_email_domain
     */
    select?: ab_email_domainSelect<ExtArgs> | null
    /**
     * Filter, which ab_email_domains to fetch.
     */
    where?: ab_email_domainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ab_email_domains to fetch.
     */
    orderBy?: ab_email_domainOrderByWithRelationInput | ab_email_domainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ab_email_domains.
     */
    cursor?: ab_email_domainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ab_email_domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ab_email_domains.
     */
    skip?: number
    distinct?: Ab_email_domainScalarFieldEnum | Ab_email_domainScalarFieldEnum[]
  }


  /**
   * ab_email_domain create
   */
  export type ab_email_domainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_email_domain
     */
    select?: ab_email_domainSelect<ExtArgs> | null
    /**
     * The data needed to create a ab_email_domain.
     */
    data: XOR<ab_email_domainCreateInput, ab_email_domainUncheckedCreateInput>
  }


  /**
   * ab_email_domain createMany
   */
  export type ab_email_domainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ab_email_domains.
     */
    data: ab_email_domainCreateManyInput | ab_email_domainCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ab_email_domain update
   */
  export type ab_email_domainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_email_domain
     */
    select?: ab_email_domainSelect<ExtArgs> | null
    /**
     * The data needed to update a ab_email_domain.
     */
    data: XOR<ab_email_domainUpdateInput, ab_email_domainUncheckedUpdateInput>
    /**
     * Choose, which ab_email_domain to update.
     */
    where: ab_email_domainWhereUniqueInput
  }


  /**
   * ab_email_domain updateMany
   */
  export type ab_email_domainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ab_email_domains.
     */
    data: XOR<ab_email_domainUpdateManyMutationInput, ab_email_domainUncheckedUpdateManyInput>
    /**
     * Filter which ab_email_domains to update
     */
    where?: ab_email_domainWhereInput
  }


  /**
   * ab_email_domain upsert
   */
  export type ab_email_domainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_email_domain
     */
    select?: ab_email_domainSelect<ExtArgs> | null
    /**
     * The filter to search for the ab_email_domain to update in case it exists.
     */
    where: ab_email_domainWhereUniqueInput
    /**
     * In case the ab_email_domain found by the `where` argument doesn't exist, create a new ab_email_domain with this data.
     */
    create: XOR<ab_email_domainCreateInput, ab_email_domainUncheckedCreateInput>
    /**
     * In case the ab_email_domain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ab_email_domainUpdateInput, ab_email_domainUncheckedUpdateInput>
  }


  /**
   * ab_email_domain delete
   */
  export type ab_email_domainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_email_domain
     */
    select?: ab_email_domainSelect<ExtArgs> | null
    /**
     * Filter which ab_email_domain to delete.
     */
    where: ab_email_domainWhereUniqueInput
  }


  /**
   * ab_email_domain deleteMany
   */
  export type ab_email_domainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ab_email_domains to delete
     */
    where?: ab_email_domainWhereInput
  }


  /**
   * ab_email_domain without action
   */
  export type ab_email_domainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ab_email_domain
     */
    select?: ab_email_domainSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type ab_email_domainWhereInput = {
    AND?: ab_email_domainWhereInput | ab_email_domainWhereInput[]
    OR?: ab_email_domainWhereInput[]
    NOT?: ab_email_domainWhereInput | ab_email_domainWhereInput[]
    id?: IntFilter<"ab_email_domain"> | number
    domain?: StringFilter<"ab_email_domain"> | string
    props?: JsonFilter<"ab_email_domain">
    groups?: JsonFilter<"ab_email_domain">
  }

  export type ab_email_domainOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type ab_email_domainWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: ab_email_domainWhereInput | ab_email_domainWhereInput[]
    OR?: ab_email_domainWhereInput[]
    NOT?: ab_email_domainWhereInput | ab_email_domainWhereInput[]
    props?: JsonFilter<"ab_email_domain">
    groups?: JsonFilter<"ab_email_domain">
  }, "id" | "domain">

  export type ab_email_domainOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: ab_email_domainCountOrderByAggregateInput
    _avg?: ab_email_domainAvgOrderByAggregateInput
    _max?: ab_email_domainMaxOrderByAggregateInput
    _min?: ab_email_domainMinOrderByAggregateInput
    _sum?: ab_email_domainSumOrderByAggregateInput
  }

  export type ab_email_domainScalarWhereWithAggregatesInput = {
    AND?: ab_email_domainScalarWhereWithAggregatesInput | ab_email_domainScalarWhereWithAggregatesInput[]
    OR?: ab_email_domainScalarWhereWithAggregatesInput[]
    NOT?: ab_email_domainScalarWhereWithAggregatesInput | ab_email_domainScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ab_email_domain"> | number
    domain?: StringWithAggregatesFilter<"ab_email_domain"> | string
    props?: JsonWithAggregatesFilter<"ab_email_domain">
    groups?: JsonWithAggregatesFilter<"ab_email_domain">
  }

  export type ab_email_domainCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_email_domainUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_email_domainUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_email_domainUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_email_domainCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_email_domainUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_email_domainUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type ab_email_domainCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type ab_email_domainAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ab_email_domainMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type ab_email_domainMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type ab_email_domainSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ab_email_domainDefaultArgs instead
     */
    export type ab_email_domainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ab_email_domainDefaultArgs<ExtArgs>

    export const Ab_email_domainScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Ab_email_domainScalarFieldEnum = (typeof Ab_email_domainScalarFieldEnum)[keyof typeof Ab_email_domainScalarFieldEnum]
    