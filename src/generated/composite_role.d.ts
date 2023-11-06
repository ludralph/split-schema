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

export type composite_role = $Result.DefaultSelection<$composite_rolePayload>


/**
   * Model composite_role
   */

export type AggregateComposite_role = {
    _count: Composite_roleCountAggregateOutputType | null
    _avg: Composite_roleAvgAggregateOutputType | null
    _sum: Composite_roleSumAggregateOutputType | null
    _min: Composite_roleMinAggregateOutputType | null
    _max: Composite_roleMaxAggregateOutputType | null
  }

  export type Composite_roleAvgAggregateOutputType = {
    id: number | null
  }

  export type Composite_roleSumAggregateOutputType = {
    id: number | null
  }

  export type Composite_roleMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Composite_roleMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Composite_roleCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Composite_roleAvgAggregateInputType = {
    id?: true
  }

  export type Composite_roleSumAggregateInputType = {
    id?: true
  }

  export type Composite_roleMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Composite_roleMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Composite_roleCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Composite_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which composite_role to aggregate.
     */
    where?: composite_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of composite_roles to fetch.
     */
    orderBy?: composite_roleOrderByWithRelationInput | composite_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: composite_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` composite_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` composite_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned composite_roles
    **/
    _count?: true | Composite_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Composite_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Composite_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Composite_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Composite_roleMaxAggregateInputType
  }

  export type GetComposite_roleAggregateType<T extends Composite_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateComposite_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComposite_role[P]>
      : GetScalarType<T[P], AggregateComposite_role[P]>
  }




  export type composite_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: composite_roleWhereInput
    orderBy?: composite_roleOrderByWithAggregationInput | composite_roleOrderByWithAggregationInput[]
    by: Composite_roleScalarFieldEnum[] | Composite_roleScalarFieldEnum
    having?: composite_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Composite_roleCountAggregateInputType | true
    _avg?: Composite_roleAvgAggregateInputType
    _sum?: Composite_roleSumAggregateInputType
    _min?: Composite_roleMinAggregateInputType
    _max?: Composite_roleMaxAggregateInputType
  }

  export type Composite_roleGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Composite_roleCountAggregateOutputType | null
    _avg: Composite_roleAvgAggregateOutputType | null
    _sum: Composite_roleSumAggregateOutputType | null
    _min: Composite_roleMinAggregateOutputType | null
    _max: Composite_roleMaxAggregateOutputType | null
  }

  type GetComposite_roleGroupByPayload<T extends composite_roleGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Composite_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Composite_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Composite_roleGroupByOutputType[P]>
            : GetScalarType<T[P], Composite_roleGroupByOutputType[P]>
        }
      >
    >


  export type composite_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["composite_role"]>

  export type composite_roleSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $composite_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "composite_role"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["composite_role"]>
    composites: {}
  }


  type composite_roleGetPayload<S extends boolean | null | undefined | composite_roleDefaultArgs> = $Result.GetResult<$composite_rolePayload, S>

  type composite_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<composite_roleFindManyArgs, 'select' | 'include'> & {
      select?: Composite_roleCountAggregateInputType | true
    }

  export interface composite_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['composite_role'], meta: { name: 'composite_role' } }
    /**
     * Find zero or one Composite_role that matches the filter.
     * @param {composite_roleFindUniqueArgs} args - Arguments to find a Composite_role
     * @example
     * // Get one Composite_role
     * const composite_role = await prisma.composite_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends composite_roleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, composite_roleFindUniqueArgs<ExtArgs>>
    ): Prisma__composite_roleClient<$Result.GetResult<$composite_rolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Composite_role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {composite_roleFindUniqueOrThrowArgs} args - Arguments to find a Composite_role
     * @example
     * // Get one Composite_role
     * const composite_role = await prisma.composite_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends composite_roleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, composite_roleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__composite_roleClient<$Result.GetResult<$composite_rolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Composite_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {composite_roleFindFirstArgs} args - Arguments to find a Composite_role
     * @example
     * // Get one Composite_role
     * const composite_role = await prisma.composite_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends composite_roleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, composite_roleFindFirstArgs<ExtArgs>>
    ): Prisma__composite_roleClient<$Result.GetResult<$composite_rolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Composite_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {composite_roleFindFirstOrThrowArgs} args - Arguments to find a Composite_role
     * @example
     * // Get one Composite_role
     * const composite_role = await prisma.composite_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends composite_roleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, composite_roleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__composite_roleClient<$Result.GetResult<$composite_rolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Composite_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {composite_roleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Composite_roles
     * const composite_roles = await prisma.composite_role.findMany()
     * 
     * // Get first 10 Composite_roles
     * const composite_roles = await prisma.composite_role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const composite_roleWithIdOnly = await prisma.composite_role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends composite_roleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, composite_roleFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$composite_rolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Composite_role.
     * @param {composite_roleCreateArgs} args - Arguments to create a Composite_role.
     * @example
     * // Create one Composite_role
     * const Composite_role = await prisma.composite_role.create({
     *   data: {
     *     // ... data to create a Composite_role
     *   }
     * })
     * 
    **/
    create<T extends composite_roleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, composite_roleCreateArgs<ExtArgs>>
    ): Prisma__composite_roleClient<$Result.GetResult<$composite_rolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Composite_roles.
     *     @param {composite_roleCreateManyArgs} args - Arguments to create many Composite_roles.
     *     @example
     *     // Create many Composite_roles
     *     const composite_role = await prisma.composite_role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends composite_roleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, composite_roleCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Composite_role.
     * @param {composite_roleDeleteArgs} args - Arguments to delete one Composite_role.
     * @example
     * // Delete one Composite_role
     * const Composite_role = await prisma.composite_role.delete({
     *   where: {
     *     // ... filter to delete one Composite_role
     *   }
     * })
     * 
    **/
    delete<T extends composite_roleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, composite_roleDeleteArgs<ExtArgs>>
    ): Prisma__composite_roleClient<$Result.GetResult<$composite_rolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Composite_role.
     * @param {composite_roleUpdateArgs} args - Arguments to update one Composite_role.
     * @example
     * // Update one Composite_role
     * const composite_role = await prisma.composite_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends composite_roleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, composite_roleUpdateArgs<ExtArgs>>
    ): Prisma__composite_roleClient<$Result.GetResult<$composite_rolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Composite_roles.
     * @param {composite_roleDeleteManyArgs} args - Arguments to filter Composite_roles to delete.
     * @example
     * // Delete a few Composite_roles
     * const { count } = await prisma.composite_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends composite_roleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, composite_roleDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Composite_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {composite_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Composite_roles
     * const composite_role = await prisma.composite_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends composite_roleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, composite_roleUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Composite_role.
     * @param {composite_roleUpsertArgs} args - Arguments to update or create a Composite_role.
     * @example
     * // Update or create a Composite_role
     * const composite_role = await prisma.composite_role.upsert({
     *   create: {
     *     // ... data to create a Composite_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Composite_role we want to update
     *   }
     * })
    **/
    upsert<T extends composite_roleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, composite_roleUpsertArgs<ExtArgs>>
    ): Prisma__composite_roleClient<$Result.GetResult<$composite_rolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Composite_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {composite_roleCountArgs} args - Arguments to filter Composite_roles to count.
     * @example
     * // Count the number of Composite_roles
     * const count = await prisma.composite_role.count({
     *   where: {
     *     // ... the filter for the Composite_roles we want to count
     *   }
     * })
    **/
    count<T extends composite_roleCountArgs>(
      args?: Subset<T, composite_roleCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Composite_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Composite_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Composite_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Composite_roleAggregateArgs>(args: Subset<T, Composite_roleAggregateArgs>): PrismaPromise<GetComposite_roleAggregateType<T>>

    /**
     * Group by Composite_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {composite_roleGroupByArgs} args - Group by arguments.
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
      T extends composite_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: composite_roleGroupByArgs['orderBy'] }
        : { orderBy?: composite_roleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, composite_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComposite_roleGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the composite_role model
   */
  readonly fields: composite_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for composite_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__composite_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the composite_role model
   */ 
  interface composite_roleFieldRefs {
    readonly id: FieldRef<"composite_role", 'Int'>
    readonly domain: FieldRef<"composite_role", 'String'>
    readonly props: FieldRef<"composite_role", 'Json'>
    readonly groups: FieldRef<"composite_role", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * composite_role findUnique
   */
  export type composite_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the composite_role
     */
    select?: composite_roleSelect<ExtArgs> | null
    /**
     * Filter, which composite_role to fetch.
     */
    where: composite_roleWhereUniqueInput
  }


  /**
   * composite_role findUniqueOrThrow
   */
  export type composite_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the composite_role
     */
    select?: composite_roleSelect<ExtArgs> | null
    /**
     * Filter, which composite_role to fetch.
     */
    where: composite_roleWhereUniqueInput
  }


  /**
   * composite_role findFirst
   */
  export type composite_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the composite_role
     */
    select?: composite_roleSelect<ExtArgs> | null
    /**
     * Filter, which composite_role to fetch.
     */
    where?: composite_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of composite_roles to fetch.
     */
    orderBy?: composite_roleOrderByWithRelationInput | composite_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for composite_roles.
     */
    cursor?: composite_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` composite_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` composite_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of composite_roles.
     */
    distinct?: Composite_roleScalarFieldEnum | Composite_roleScalarFieldEnum[]
  }


  /**
   * composite_role findFirstOrThrow
   */
  export type composite_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the composite_role
     */
    select?: composite_roleSelect<ExtArgs> | null
    /**
     * Filter, which composite_role to fetch.
     */
    where?: composite_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of composite_roles to fetch.
     */
    orderBy?: composite_roleOrderByWithRelationInput | composite_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for composite_roles.
     */
    cursor?: composite_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` composite_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` composite_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of composite_roles.
     */
    distinct?: Composite_roleScalarFieldEnum | Composite_roleScalarFieldEnum[]
  }


  /**
   * composite_role findMany
   */
  export type composite_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the composite_role
     */
    select?: composite_roleSelect<ExtArgs> | null
    /**
     * Filter, which composite_roles to fetch.
     */
    where?: composite_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of composite_roles to fetch.
     */
    orderBy?: composite_roleOrderByWithRelationInput | composite_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing composite_roles.
     */
    cursor?: composite_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` composite_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` composite_roles.
     */
    skip?: number
    distinct?: Composite_roleScalarFieldEnum | Composite_roleScalarFieldEnum[]
  }


  /**
   * composite_role create
   */
  export type composite_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the composite_role
     */
    select?: composite_roleSelect<ExtArgs> | null
    /**
     * The data needed to create a composite_role.
     */
    data: XOR<composite_roleCreateInput, composite_roleUncheckedCreateInput>
  }


  /**
   * composite_role createMany
   */
  export type composite_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many composite_roles.
     */
    data: composite_roleCreateManyInput | composite_roleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * composite_role update
   */
  export type composite_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the composite_role
     */
    select?: composite_roleSelect<ExtArgs> | null
    /**
     * The data needed to update a composite_role.
     */
    data: XOR<composite_roleUpdateInput, composite_roleUncheckedUpdateInput>
    /**
     * Choose, which composite_role to update.
     */
    where: composite_roleWhereUniqueInput
  }


  /**
   * composite_role updateMany
   */
  export type composite_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update composite_roles.
     */
    data: XOR<composite_roleUpdateManyMutationInput, composite_roleUncheckedUpdateManyInput>
    /**
     * Filter which composite_roles to update
     */
    where?: composite_roleWhereInput
  }


  /**
   * composite_role upsert
   */
  export type composite_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the composite_role
     */
    select?: composite_roleSelect<ExtArgs> | null
    /**
     * The filter to search for the composite_role to update in case it exists.
     */
    where: composite_roleWhereUniqueInput
    /**
     * In case the composite_role found by the `where` argument doesn't exist, create a new composite_role with this data.
     */
    create: XOR<composite_roleCreateInput, composite_roleUncheckedCreateInput>
    /**
     * In case the composite_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<composite_roleUpdateInput, composite_roleUncheckedUpdateInput>
  }


  /**
   * composite_role delete
   */
  export type composite_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the composite_role
     */
    select?: composite_roleSelect<ExtArgs> | null
    /**
     * Filter which composite_role to delete.
     */
    where: composite_roleWhereUniqueInput
  }


  /**
   * composite_role deleteMany
   */
  export type composite_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which composite_roles to delete
     */
    where?: composite_roleWhereInput
  }


  /**
   * composite_role without action
   */
  export type composite_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the composite_role
     */
    select?: composite_roleSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type composite_roleWhereInput = {
    AND?: composite_roleWhereInput | composite_roleWhereInput[]
    OR?: composite_roleWhereInput[]
    NOT?: composite_roleWhereInput | composite_roleWhereInput[]
    id?: IntFilter<"composite_role"> | number
    domain?: StringFilter<"composite_role"> | string
    props?: JsonFilter<"composite_role">
    groups?: JsonFilter<"composite_role">
  }

  export type composite_roleOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type composite_roleWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: composite_roleWhereInput | composite_roleWhereInput[]
    OR?: composite_roleWhereInput[]
    NOT?: composite_roleWhereInput | composite_roleWhereInput[]
    props?: JsonFilter<"composite_role">
    groups?: JsonFilter<"composite_role">
  }, "id" | "domain">

  export type composite_roleOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: composite_roleCountOrderByAggregateInput
    _avg?: composite_roleAvgOrderByAggregateInput
    _max?: composite_roleMaxOrderByAggregateInput
    _min?: composite_roleMinOrderByAggregateInput
    _sum?: composite_roleSumOrderByAggregateInput
  }

  export type composite_roleScalarWhereWithAggregatesInput = {
    AND?: composite_roleScalarWhereWithAggregatesInput | composite_roleScalarWhereWithAggregatesInput[]
    OR?: composite_roleScalarWhereWithAggregatesInput[]
    NOT?: composite_roleScalarWhereWithAggregatesInput | composite_roleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"composite_role"> | number
    domain?: StringWithAggregatesFilter<"composite_role"> | string
    props?: JsonWithAggregatesFilter<"composite_role">
    groups?: JsonWithAggregatesFilter<"composite_role">
  }

  export type composite_roleCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type composite_roleUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type composite_roleUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type composite_roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type composite_roleCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type composite_roleUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type composite_roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type composite_roleCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type composite_roleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type composite_roleMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type composite_roleMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type composite_roleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use composite_roleDefaultArgs instead
     */
    export type composite_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = composite_roleDefaultArgs<ExtArgs>

    export const Composite_roleScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Composite_roleScalarFieldEnum = (typeof Composite_roleScalarFieldEnum)[keyof typeof Composite_roleScalarFieldEnum]
    